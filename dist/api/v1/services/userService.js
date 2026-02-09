import prisma from '../../../config/prisma.js';
import { hashPassword } from '../../../utils/hashingUtility.js';
export const getById = async (userId) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            email: true
        }
    });
    if (!user)
        throw new Error("User not found.");
    return user;
};
export const add = async (email, password) => {
    const user = await prisma.user.create({
        data: {
            email: email,
            hashedPassword: password
        }
    });
    return user;
};
export const updatePassword = async (userId, newPassword) => {
    const hash = await hashPassword(newPassword);
    const user = await prisma.user.update({
        where: { id: userId },
        data: {
            hashedPassword: hash
        }
    });
    return user.email;
};
//# sourceMappingURL=userService.js.map