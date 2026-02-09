import prisma from '../../../config/prisma.js';
import { hashPassword, compareHashedPasswords } from '../../../utils/hashingUtility.js';
// bcrypt accepts 'string' only, not 'String'
export const registUser = async (email, password) => {
    const isUserExist = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    if (isUserExist) {
        throw new Error("User already exists.");
    }
    const hashed = await hashPassword(password);
    const newUser = await prisma.user.create({
        data: {
            email: email,
            hashedPassword: hashed,
        },
    });
    return newUser;
};
export const loginUser = async (email, password) => {
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
};
//# sourceMappingURL=authService.js.map