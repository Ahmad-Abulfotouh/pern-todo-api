import { Router } from 'express'
import { getAllTodos, addTodo, updateTodoCheckBox, updateTodoContent, removeTodo } from '../controllers/todoController.js'

const router = Router();

router.get('/', getAllTodos);
router.post('/', addTodo);
router.put('/checkBox/:id', updateTodoCheckBox);
router.put('/content/:id', updateTodoContent);
router.delete('/:id', removeTodo);

export default router;
