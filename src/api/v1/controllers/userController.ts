import { type Request, type Response } from 'express'
import * as UserService from '../services/userService.js'

export const getUser = async (req: any, res: Response) => {
    const userId = req.user.id;
    try {
        const user = await UserService.getById(userId);
        res.status(200).json({message: 'hello from get user', user: user});
    } catch (err: any) {
        res.status(400).json({ error: 'Get user failed' });
    }
}

export const updateUserPassword = async (req: any, res: Response) => {
    const userId = req.user.id;
    const { newPassword } = req.body.user;
    try {
        const updatedUser = await UserService.updatePasword(userId, newPassword);
        res.status(200).json({message: 'hello from update user', user: updatedUser});
    } catch (err: any) {
        res.status(400).json({ error: 'Updateing failed' });
    }
}

export const removeUser = async (req: any, res: Response) => {
    const userId = req.user.id;
    try {
        const deletedUser = await UserService.remove(userId);
        res.status(200).json({message: 'hello from delete user', user: deletedUser});
    } catch (err: any) {
        res.status(400).json({ error: 'deletting failed' });
    }
}