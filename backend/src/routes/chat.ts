// src/routes/chat.ts
import express from 'express';
import { askGemini } from '../services/geminiService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request: messages array is required' });
    }

    console.log("Messages received:", messages); // Log incoming messages for debugging
    const reply = await askGemini(messages);
    res.json({ reply });
  } catch (err) {
    console.error('❌ NVIDIA API error:', err);
    res.status(500).json({ 
      error: 'Failed to get response from NVIDIA API.', 
      details: err instanceof Error ? err.message : 'Unknown error',
      stack: err instanceof Error ? err.stack : undefined
    });
  }
});

// Handle OPTIONS requests
router.options('/', (req, res) => {
  res.status(204).end();
});

export default router;
