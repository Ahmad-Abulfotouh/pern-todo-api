import { type Request, type Response } from 'express'
import * as UserService from '../services/userService.js'

export const getUser = async (req: any, res: Response) => {
    const userId = req.user.id;
    try {
        const user = await UserService.getById(userId);
        res.status(200).json({message: 'User profile retrieved successfully!', user: user});
    } catch (err: any) {
        res.status(400).json({ error: 'Retrieving user profile failed.' });
    }
}

export const updateUserPassword = async (req: any, res: Response) => {
    const userId = req.user.id;
    const { newPassword } = req.body;
    try {
        const updatedUser = await UserService.updatePassword(userId, newPassword);
        res.status(201).json({message: 'Updating password completed successfully!', user: updatedUser});
    } catch (err: any) {
        res.status(400).json({ error: 'Updateing failed.' });
    }
}