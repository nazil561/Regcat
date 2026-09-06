export const analyzeTNCDBRCompliance = async (formData) => {
  const response = await fetch("https://us-central1-YOUR_PROJECT_ID.cloudfunctions.net/analyzeCompliance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });
  
  const result = await response.json();
  if (!result.choices || !result.choices[0]) {
    throw new Error("Invalid response from compliance proxy");
  }
  return JSON.parse(result.choices[0].message.content);
};
