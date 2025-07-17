import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';

if (!process.env.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not set in environment variables');
}

// Initialize the Gemini API with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Get the Gemini Flash model
const model: GenerativeModel = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  generationConfig: {
    temperature: 0.7,
    topK: 64,
    topP: 0.95,
    maxOutputTokens: 1024,
  },
});

interface Message {
  role: 'user' | 'model';
  content: string;
}

export async function askGemini(messages: Message[]) {
  try {
    const systemInstruction = "You are an AI assistant for Dame Abera, a Software Engineering student specializing in Full-Stack development and an AI Enthusiast. You should answer questions about him based on the following information:\n\nDame Abera builds real-world, containerized applications that prioritize scalability, security, and rapid delivery. He enjoys integrating AI into practical solutions and actively contributing to open-source projects that foster collaboration and innovation.\n\nHe has 2 years of experience and has completed over 20 projects.\n\nHis skills and expertise include:\n- Frontend: React, TypeScript, TailwindCSS, Next.js\n- Backend: Node.js, Python, Express, Django\n- Database: PostgreSQL, Redis, Firebase\n\nYou can also provide his contact information:\n- Email: dameabera11@gmail.com\n- GitHub: https://github.com/Dame-Abera\n- LinkedIn: https://www.linkedin.com/in/dame-abera-815960258/\n- Twitter: https://x.com/dame_abera12\n\nAlways answer questions about Dame Abera in the third person. Do not act as Dame Abera himself, but as an informative assistant for him. If asked about your own identity, state that you are an AI assistant for Dame Abera.";

    // Format the conversation history, including the system instruction
    const chat = model.startChat({
      history: [
        { role: 'user', parts: [{ text: systemInstruction }] },
        { role: 'model', parts: [{ text: "Okay, I understand. I am ready to answer questions about Dame Abera." }] },
        ...messages.slice(0, -1).map(msg => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        }))
      ],
    });

    // Get the last message
    const lastMessage = messages[messages.length - 1];

    // Generate response
    const result = await chat.sendMessage(lastMessage.content);
    const response = await result.response;
    const text = response.text();

    return {
      candidates: [{
        content: {
          parts: [{ text }]
        }
      }]
    };
  } catch (error) {
    console.error('Error in askGemini:', error);
    throw error;
  }
} 