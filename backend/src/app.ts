import express from 'express';
import cors from 'cors';
import chatRoute from './routes/chat';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/chat', chatRoute);

export default app;
