import prisma from '../../../config/prisma.js'
import { hashPassword, compareHashedPasswords } from '../../../utils/hashingUtility.js';

// bcrypt accepts 'string' only, not 'String'
export const registUser = async (email: string, password: string) => {
    const isUserExist = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    if (isUserExist) {
        throw new Error("User already exists.");
    }

    const hashed: string = await hashPassword(password);

    const newUser = await prisma.user.create({
        data: {
            email: email,
            hashedPassword: hashed,
        },
    });

    return newUser;
}

export const loginUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        throw new Error("User doesn't exist.");
    }

    const isPasswordValid = await compareHashedPasswords(password, user.hashedPassword);
    if (!isPasswordValid) {
        throw new Error("Wrong password.");
    }

    return user;
}