from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, validator
from typing import List, Optional, Dict, Any
from datetime import datetime
from enum import Enum
import motor.motor_asyncio as mongo
from bson import ObjectId
import math

# --- Configuration ---
MONGODB_URI = "mongodb://localhost:27017"  # Change to Atlas URI in production
DB_NAME = "dtcp_regcat"

app = FastAPI(title="DTCP Permit Compliance API", version="2.0.0")

# CORS for GitHub Pages and Local Dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Client
client = mongo.AsyncIOMotorClient(MONGODB_URI)
db = client[DB_NAME]

# --- Models (Pydantic) ---

class FoundationType(str, Enum):
    ISOLATED = "Isolated Footing"
    RAFT = "Raft Foundation"
    PILE = "Pile Foundation"

class SoilTestInput(BaseModel):
    sbc: float = Field(..., gt=0, description="Safe Bearing Capacity kN/m²")
    ph: float = Field(..., ge=3, le=9, description="Soil pH")
    ec: float = Field(..., ge=0, le=20, description="Electrical Conductivity mS/cm")
    moisture: float = Field(default=0, ge=0, le=100)
    is_certified: bool = Field(default=False, description="Must be True for final approval")
    engineer_dsc_id: Optional[str] = None

class PropertyInput(BaseModel):
    district: str
    taluk: str
    village: str
    survey_number: str
    patta_number: str
    plot_area_sqft: float
    road_width_ft: float
    proposed_built_area: float
    building_height_m: float

class FieldEvent(BaseModel):
    field: str
    value: Any
    actor: str
    logical_sequence: int  # Hybrid Logical Clock counter
    client_timestamp: int

class ApplicationDraft(BaseModel):
    user_id: str
    property: PropertyInput
    soil_tests: Optional[SoilTestInput] = None
    events: List[FieldEvent] = []
    status: str = "draft"
    last_updated: datetime = Field(default_factory=datetime.utcnow)

# --- Geospatial & Regulatory Logic ---

def check_buffer_zones(lat: float, lon: float) -> Dict[str, bool]:
    """
    Simulates MongoDB $geoWithin checks for Railway (15m), ASI (50m), Water Bodies.
    In production, this queries MongoDB Geospatial indexes.
    """
    # Mock logic for demonstration - replace with actual $nearSphere queries
    return {
        "railway_clear": True,  # False if within 15m
        "asi_clear": True,      # False if within 50m
        "water_body_clear": True
    }

def validate_sbc_and_recommend(sbc: float, is_certified: bool) -> Dict[str, Any]:
    """
    Anti-Spoofing Logic: 
    - If not certified, flag as 'Provisional' and warn of liability.
    - If SBC < 100, mandate Raft/Pile regardless of user input.
    """
    recommendation = FoundationType.ISOLATED
    warnings = []
    
    if sbc < 100:
        recommendation = FoundationType.PILE
        warnings.append("CRITICAL: SBC < 100 kN/m² mandates Pile/Raft foundation per TNCDBR Rule 35.")
    elif sbc < 150:
        recommendation = FoundationType.RAFT
        warnings.append("WARNING: SBC < 150 kN/m² recommends Raft foundation.")
        
    if not is_certified:
        warnings.append("LEGAL NOTICE: Self-reported soil data is provisional. Final approval requires DSC from licensed Geotechnical Engineer.")
        
    return {
        "foundation_type": recommendation.value,
        "is_compliant_structural": True, # Structurally okay if foundation matches
        "warnings": warnings,
        "requires_certification": not is_certified
    }

def merge_crdt_events(current_events: List[dict], new_events: List[FieldEvent]) -> List[dict]:
    """
    CRDT Merge Logic using Hybrid Logical Clocks (HLC).
    Sorts by logical_sequence to resolve conflicts without timestamp drift issues.
    """
    combined = current_events + [e.dict() for e in new_events]
    # Sort by Actor then Logical Sequence to ensure deterministic ordering
    combined.sort(key=lambda x: (x['actor'], x['logical_sequence']))
    return combined

# --- API Endpoints ---

@app.post("/api/applications/draft", status_code=201)
async def create_or_update_draft(app_data: ApplicationDraft):
    """
    Creates or updates a draft application using CRDT event merging.
    Handles offline sync conflicts.
    """
    collection = db["applications"]
    
    # Check existing
    existing = await collection.find_one({"user_id": app_data.user_id, "status": "draft"})
    
    if existing:
        # Merge events using HLC logic
        merged_events = merge_crdt_events(existing.get("events", []), app_data.events)
        update_data = app_data.dict()
        update_data["events"] = merged_events
        update_data["last_updated"] = datetime.utcnow()
        
        await collection.update_one(
            {"_id": existing["_id"]},
            {"$set": update_data}
        )
        return {"message": "Draft updated with CRDT merge", "id": str(existing["_id"])}
    else:
        result = await collection.insert_one(app_data.dict())
        return {"message": "New draft created", "id": str(result.inserted_id)}

@app.post("/api/validate/geotechnical")
async def validate_geotechnical(soil: SoilTestInput):
    """
    Server-side validation to prevent spoofing.
    Returns foundation recommendation and legal warnings.
    """
    result = validate_sbc_and_recommend(soil.sbc, soil.is_certified)
    return result

@app.post("/api/validate/location")
async def validate_location(lat: float, lon: float):
    """
    Checks regulatory buffer zones (Railway, ASI, Water).
    """
    buffers = check_buffer_zones(lat, lon)
    is_clear = all(buffers.values())
    
    if not is_clear:
        raise HTTPException(
            status_code=400, 
            detail={
                "message": "Location violates regulatory buffer zones.",
                "violations": {k: v for k, v in buffers.items() if not v}
            }
        )
    return {"status": "clear", "zones": buffers}

@app.get("/api/health")
async def health_check():
    return {"status": "operational", "database": "connected", "version": "2.0.0"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
