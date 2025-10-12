if (!process.env.NVIDIA_API_KEY) {
  throw new Error('NVIDIA_API_KEY is not set in environment variables');
}

// NVIDIA NIM API configuration
const NVIDIA_API_BASE = 'https://integrate.api.nvidia.com/v1';
const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY;

interface Message {
  role: 'user' | 'model';
  content: string;
}

export async function askGemini(messages: Message[]) {
  try {
    console.log('NVIDIA_API_KEY exists:', !!process.env.NVIDIA_API_KEY);
    console.log('Messages received:', messages);
    
    const systemInstruction = "You are an AI assistant for Dame Abera, a Software Engineering student specializing in Full-Stack development and an AI Enthusiast. You should answer questions about him based on the following information:\n\nDame Abera builds real-world, containerized applications that prioritize scalability, security, and rapid delivery. He enjoys integrating AI into practical solutions and actively contributing to open-source projects that foster collaboration and innovation.\n\nHe has 2 years of experience and has completed over 20 projects.\n\nHis skills and expertise include:\n- Frontend: React, TypeScript, TailwindCSS, Next.js\n- Backend: Node.js, Python, Express, Django\n- Database: PostgreSQL, Redis, Firebase\n\nYou can also provide his contact information:\n- Email: dameabera11@gmail.com\n- GitHub: https://github.com/Dame-Abera\n- LinkedIn: https://www.linkedin.com/in/dame-abera-815960258/\n- Twitter: https://x.com/dame_abera12\n\nAlways answer questions about Dame Abera in the third person. Do not act as Dame Abera himself, but as an informative assistant for him. If asked about your own identity, state that you are an AI assistant for Dame Abera.";

    // Format messages for NVIDIA API
    const formattedMessages = [
      { role: 'system', content: systemInstruction },
      ...messages.map(msg => ({
        role: msg.role === 'model' ? 'assistant' : msg.role,
        content: msg.content
      }))
    ];

    console.log('Making request to NVIDIA API...');
    console.log('Request body:', JSON.stringify({
      model: 'meta/llama-3.1-8b-instruct',
      messages: formattedMessages,
      temperature: 0.7,
      max_tokens: 1024,
      stream: false
    }, null, 2));

    // Make request to NVIDIA NIM API
    const response = await fetch(`${NVIDIA_API_BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NVIDIA_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'meta/llama-3.1-8b-instruct',
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 1024,
        stream: false
      })
    });

    console.log('NVIDIA API response status:', response.status);
    console.log('NVIDIA API response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('NVIDIA API error response:', errorText);
      throw new Error(`NVIDIA API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    console.log('NVIDIA API response data:', data);
    
    const text = data.choices?.[0]?.message?.content || "No response from AI";

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