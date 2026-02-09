import type { Request, Response } from 'express';
import { registUser, loginUser } from '../services/authService.js'
import { generateToken } from '../../../utils/jwtUtility.js'

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
        res.status(409).json({ message: "Registration failed.", error: error.message });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);

        const token = generateToken({ id: user.id, email: user.email });

        res.status(201).json({
            message: "Login successed!",
            user: { id: user.id, email: user.email },
            token
        });
    } catch (error: any) {
        res.status(401).json({ message: "Login failed.", error: error.message });
    }
}