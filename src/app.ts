import express from 'express';
import cors from 'cors';
import authRouter from './api/v1/routes/authRoutes.js'
import userRouter from './api/v1/routes/userRoutes.js'
import todoRouter from './api/v1/routes/todoRoutes.js'
import { authenticateToken } from './middlewares/authMiddleware.js';
const app = express();

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: "Welcome to PERN Todo API!" });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', authenticateToken, userRouter);
app.use('/api/v1/todos', authenticateToken, todoRouter);

export default app;