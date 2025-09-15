const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) return res.status(400).json({ reply: "Please send a message." });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant for a college event management system." },
        { role: "user", content: message },
      ],
      max_tokens: 150
    });

    const reply = response.choices[0].message.content.trim();

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Something went wrong. Please try again later." });
  }
});

module.exports = router;
