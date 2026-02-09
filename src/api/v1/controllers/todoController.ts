import { type Request, type Response } from 'express'
import * as TodoService from '../services/todoService.js'

export const getAllTodos = async (req: any, res: Response) => {
    const userId = req.user.id;
    try {
        const todo = await TodoService.getAll(userId);
        res.status(200).json({message: 'hello from get todos', todo: todo});
    } catch (err: any) {
        res.status(400).json({ error: 'Get all users failed' });
    }
}

export const addTodo = async (req: any, res: Response) => {
    const userId = req.user.id;
    const { content } = req.body;
    try {
        const todo = await TodoService.add(userId, content);
        res.status(200).json({message: 'hello from create todo', todo: todo});
    } catch (err: any) {
        res.status(400).json({ error: 'Adding failed', message: err });
    }
}

export const updateTodo = async (req: Request<{id: string}>, res: Response) => {
    const todoId = Number(req.params.id);
    const newData = req.body;
    try {
        const updatedTodo = await TodoService.update(todoId, newData);
        res.status(200).json({message: 'hello from update todo check mark', todo: updatedTodo});
    } catch (err: any) {
        res.status(400).json({ error: err, message: 'Updateing failed' });
    }
}

export const removeTodo = async (req: Request<{id: string}>, res: Response) => {
    const todoId = Number(req.params.id);
    try {
        const deletedTodo = await TodoService.remove(todoId);
        res.status(200).json({message: 'hello from delete todo', user: deletedTodo});
    } catch (err: any) {
        res.status(400).json({ error: 'deletting failed' });
    }
}