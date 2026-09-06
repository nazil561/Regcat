const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.analyzeCompliance = onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send('');
    return;
  }

  try {
    const formData = req.body;
    const groqApiKey = process.env.GROQ_API_KEY;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${groqApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: "You are an expert TNCDBR 2019 building code compliance auditor." },
          { role: "user", content: `Audit this property data: ${JSON.stringify(formData)}` }
        ],
        response_format: { type: "json_object" }
      })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    logger.error("Groq Proxy Error", error);
    res.status(500).json({ error: "Internal Server Error during compliance evaluation" });
  }
});
