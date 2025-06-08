import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { json } from 'express';
import chatRoutes from './routes/chat.js';

const app = express();

// Enable CORS for all origins (you can specify more restrictions if needed)
app.use(cors());

// Middleware to parse JSON bodies
app.use(json());

// Set up routes
app.use('/api/chat', chatRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
