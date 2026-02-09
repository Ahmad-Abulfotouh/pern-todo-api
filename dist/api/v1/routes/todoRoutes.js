import { Router } from 'express';
import { getAllTodos, addTodo, updateTodo, removeTodo } from '../controllers/todoController.js';
const router = Router();
router.get('/', getAllTodos);
router.post('/', addTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', removeTodo);
export default router;
//# sourceMappingURL=todoRoutes.js.map