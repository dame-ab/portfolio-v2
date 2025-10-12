import express from 'express';
import cors from 'cors';
import chatRoute from './routes/chat.js';

const app = express();

// Add a simple root route for testing deployment
app.get('/', (req, res) => {
  res.status(200).send('Backend is running!');
});

// Logging middleware to inspect incoming requests
app.use((req, res, next) => {
  console.log(`Incoming request: Method=${req.method}, URL=${req.url}, Path=${req.path}`);
  next();
});

// List of allowed origins
const allowedOrigins = [
  'http://localhost:5173',
  'https://dame-abera.vercel.app',
  'https://portfolio-ie0h06tuv-dame-aberas-projects.vercel.app',
  'https://portfolio-backend-2oet85ruz-dame-aberas-projects.vercel.app',
  'https://portfolio-o8q8tdh20-dame-aberas-projects.vercel.app',
  'https://portfolio-backend-4n2p1hd8g-dame-aberas-projects.vercel.app'
];

// CORS configuration
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

app.use(express.json());

// Explicitly handle OPTIONS requests for /api/chat for CORS preflight
app.options('/api/chat', cors());

app.use('/api/chat', chatRoute);

export default app;
