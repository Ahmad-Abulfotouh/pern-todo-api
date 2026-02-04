import { type Request, type Response } from 'express'
import * as TodoService from '../services/todoService.js'

export const getAllTodos = async (req: Request, res: Response) => {
    try {
        const todo = await TodoService.getAll();
        res.status(200).json({message: 'hello from get todos', todo: todo});
    } catch (err: any) {
        res.status(400).json({ error: 'Get all users failed' });
    }
}

export const addTodo = async (req: Request, res: Response) => {
    const { userId, content } = req.body.todo;
    try {
        const todo = await TodoService.add(userId, content);
        res.status(200).json({message: 'hello from create todo', todo: todo});
    } catch (err: any) {
        res.status(400).json({ error: 'Adding failed' });
    }
}

export const updateTodoCheckBox = async (req: Request<{id: string}>, res: Response) => {
    const todoId = Number(req.params.id);
    const newCheckMark = Boolean(req.body.checkMark);
    try {
        const updatedTodo = await TodoService.updateCheckBox(todoId, newCheckMark);
        res.status(200).json({message: 'hello from update todo check mark', todo: updatedTodo});
    } catch (err: any) {
        res.status(400).json({ error: 'Updateing failed' });
    }
}

export const updateTodoContent = async (req: Request<{id: string}>, res: Response) => {
    const todoId = Number(req.params.id);
    const newContent = req.body.newContent;
    try {
        const updatedTodo = await TodoService.updateContent(todoId, newContent);
        res.status(200).json({message: 'hello from update todo content', todo: updatedTodo});
    } catch (err: any) {
        res.status(400).json({ error: 'Updateing failed' });
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