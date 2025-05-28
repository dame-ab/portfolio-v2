// src/routes/chat.ts
import express from 'express';
import { askGemini } from '../services/geminiService';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;
    console.log("Messages received:", messages); // Log incoming messages for debugging
    const reply = await askGemini(messages);
    res.json({ reply });
  } catch (err) {
    console.error('❌ Gemini error:', err);
    res.status(500).json({ error: 'Failed to get response from Gemini.', details: err });
  }
});

export default router;
