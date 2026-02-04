import express from 'express';
import userRouter from './routes/userRoutes.js'
import todoRouter from './routes/todoRoutes.js'
const app = express();

app.use(express.json())

app.use('/user', userRouter);
app.use('/todo', todoRouter);

export default app;