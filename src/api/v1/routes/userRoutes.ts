import { Router } from 'express'
import { getUser, updateUserPassword } from '../controllers/userController.js'

const router = Router();

router.get('/', getUser);
router.patch('/', updateUserPassword);

export default router;
