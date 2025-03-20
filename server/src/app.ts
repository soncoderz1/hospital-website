import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import routes from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3003;

// Connect to MongoDB
connectDB();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Error handling
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Handle server errors
server.on('error', (error: NodeJS.ErrnoException) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please try a different port.`);
    process.exit(1);
  }
});

export default app;