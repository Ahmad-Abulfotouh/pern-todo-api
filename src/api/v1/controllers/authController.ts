import type { Request, Response } from 'express';
import { registUser, loginUser } from '../services/authService.js'
import { generateToken } from '../../../utils/jwtUtils.js'

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const newUser = await registUser(email, password);
        const token = generateToken({ id: newUser.id, email: newUser.email });

        res.status(201).json({ 
            message: "registration completed succesfully!",
            user: { id: newUser.id, email: newUser.email }, 
            token 
        });
    }
    catch(error: any) {
        res.status(400).json({ error: error.message });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);

        const token = generateToken({ id: user.id, email: user.email });

        res.status(200).json({
            message: "Login successful!",
            user: { id: user.id, email: user.email },
            token
        });
    } catch (error: any) {
        res.status(401).json({ error: error.message });
    }
}