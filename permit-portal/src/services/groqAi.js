export async function analyzeTNCDBRCompliance(formData) {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("VITE_GROQ_API_KEY environment variable is not defined.");
  }

  const prompt = `
You are a senior urban planning compliance officer specializing in Tamil Nadu Combined Development and Building Rules, 2019 (TNCDBR 2019).

Analyze the following proposed building site plan parameters against official TNCDBR 2019 rules:
- Plot Area: ${formData.plotArea || 0} sq.m
- Road Width: ${formData.roadWidth || 0} meters
- Proposed Height / Floors: ${formData.height || 0} m / ${formData.floors || 1} floors
- Proposed FSI: ${formData.fsi || 0}
- Proposed Coverage: ${formData.plotCoverage || 0}%
- Front Setback: ${formData.frontSetback || 0} m
- Rear Setback: ${formData.rearSetback || 0} m
- Side Setback: ${formData.sideSetback || 0} m
- Building Type: ${formData.buildingType || 'Residential'}

Respond strictly with a valid JSON object matching this exact structure:
{
  "overallStatus": "APPROVED",
  "fsiCompliance": {
    "allowed": 1.75,
    "proposed": 1.5,
    "status": "PASS"
  },
  "setbackCompliance": {
    "status": "PASS",
    "remarks": "Detailed setback compliance observations under TNCDBR 2019 rules."
  },
  "violations": ["List of non-compliant parameters"],
  "recommendations": ["Actionable corrective structural recommendations"]
}
`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { 
            role: "system", 
            content: "You are an official TNCDBR 2019 regulatory engine. Output valid JSON matching the requested schema without extra text." 
          },
          { role: "user", content: prompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.1
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error?.message || `Groq API HTTP Error ${response.status}`);
    }

    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
  } catch (error) {
    console.error("Groq AI TNCDBR Analysis Error:", error);
    throw error;
  }
}
