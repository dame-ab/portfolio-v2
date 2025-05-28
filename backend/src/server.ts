import * as dotenv from 'dotenv';

dotenv.config(); // This loads the variables from your .env file
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import chatRoutes from './routes/chat';

const app = express();

// Enable CORS for all origins (you can specify more restrictions if needed)
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Set up routes
app.use('/api/chat', chatRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
