export const calculateDCR = (plotArea, builtUpArea) => {
  const fsi = builtUpArea / plotArea;
  const coverage = (builtUpArea / plotArea) * 100;
  return {
    fsi: parseFloat(fsi.toFixed(2)),
    coverage: parseFloat(coverage.toFixed(2)),
    fsiCompliant: fsi <= 2.0,
    coverageCompliant: coverage <= 75
  };
};

export const recommendFoundation = (sbc) => {
  if (!sbc) return "Pending Test";
  if (sbc > 150) return "Isolated Footing (Optimal)";
  if (sbc >= 100 && sbc <= 150) return "Combined Footing Required";
  return "WARNING: Raft/Pile Foundation Required (Low Bearing Capacity)";
};

export const checkCorrosionRisk = (ph) => {
  if (!ph) return "Pending Test";
  if (ph < 6.0) return "HIGH RISK: Acidic Soil. Anti-corrosive cement (SRC) mandatory.";
  if (ph > 8.5) return "HIGH RISK: Alkaline Soil. Sulfate-resistant concrete required.";
  return "Normal (Standard OPC Cement safe)";
};

export const calculateRWH = (plotArea) => {
  const averageRainfallMm = 900; 
  const runoffCoefficient = 0.85; 
  const volumeLiters = plotArea * (averageRainfallMm / 1000) * runoffCoefficient * 1000;
  return parseFloat(volumeLiters.toFixed(2));
};

export const validateSurveyNumber = (surveyNo) => {
  const regex = /^\d+\/[A-Za-z0-9]+$/;
  return regex.test(surveyNo);
};
