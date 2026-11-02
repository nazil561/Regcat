// Local compliance engine — no external API, no placeholders.
// Computes TNCDBR compliance from engineeringLogic so the report always generates.
import { calculateDCR, recommendFoundation, checkCorrosionRisk, calculateRWH } from './engineeringLogic';

export const analyzeTNCDBRCompliance = async (formData) => {
  const plot = Number(formData.plotArea) || 0;
  const built = Number(formData.builtUpArea) || 0;
  const dcr = calculateDCR(plot, built);
  const fsiPass = dcr.fsi <= 2.0;
  const covPass = dcr.coverage <= 75;
  const rwh = calculateRWH(plot);
  const foundation = recommendFoundation(formData.sbc);
  const corrosion = checkCorrosionRisk(formData.soilPh);

  return {
    overallStatus: fsiPass && covPass ? 'APPROVED' : 'VARIANCE_REQUIRED',
    source: 'LOCAL_ENGINE',
    fsi: dcr.fsi,
    coverage: dcr.coverage,
    foundation,
    corrosion,
    rwh,
    findings: [
      `FSI ${dcr.fsi} vs max 2.0 — ${fsiPass ? 'PASS' : 'FAIL'}`,
      `Coverage ${dcr.coverage}% vs max 75% — ${covPass ? 'PASS' : 'FAIL'}`,
      `Rainwater harvesting required: ${rwh} L`,
      `Foundation recommendation: ${foundation}`,
      `Corrosion risk: ${corrosion}`,
    ],
    generatedAt: new Date().toISOString(),
  };
};
