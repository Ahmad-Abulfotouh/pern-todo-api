import { Router } from 'express'
import { getUser, getAllUsers, addUser, removeUser, updateUserPassword } from '../controllers/userController.js'

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', addUser);
router.put('/:id', updateUserPassword);
router.delete('/:id', removeUser);

export default router;
