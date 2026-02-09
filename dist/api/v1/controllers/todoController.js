import {} from 'express';
import * as TodoService from '../services/todoService.js';
export const getAllTodos = async (req, res) => {
    const userId = req.user.id;
    try {
        const todo = await TodoService.getAll(userId);
        res.status(200).json({ message: 'Todo list retrieved successfully!', todo: todo });
    }
    catch (err) {
        res.status(400).json({ error: 'Geting todo list failed.' });
    }
};
export const addTodo = async (req, res) => {
    const userId = req.user.id;
    const { content } = req.body;
    try {
        const todo = await TodoService.add(userId, content);
        res.status(201).json({ message: 'Todo item created successfully!', todo: todo });
    }
    catch (err) {
        res.status(400).json({ error: 'Adding failed.', message: err });
    }
};
export const updateTodo = async (req, res) => {
    const userId = req.user.id;
    const todoId = Number(req.params.id);
    const newData = req.body;
    try {
        const updatedTodo = await TodoService.update(todoId, userId, newData);
        res.status(201).json({ message: 'Todo item updated successfully!', todo: updatedTodo });
    }
    catch (err) {
        res.status(400).json({ error: err, message: 'Updating failed.' });
    }
};
export const removeTodo = async (req, res) => {
    const userId = req.user.id;
    const todoId = Number(req.params.id);
    try {
        const deletedTodo = await TodoService.remove(todoId, userId);
        res.status(201).json({ message: 'Todo item removed  successfully!', user: deletedTodo });
    }
    catch (err) {
        res.status(400).json({ error: 'Deleting failed.' });
    }
};
//# sourceMappingURL=todoController.js.map