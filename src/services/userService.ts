import prisma from '../config/prisma.js';

export const getAll = async () => {
    const allUsers = await prisma.user.findMany({
        select: {
            id: true,
            email: true
        }
    })
    return allUsers;
}

export const getById = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            email: true
        }
    });

    if (!user) throw new Error("User not found");
    return user;
}

export const add = async (email: string, password: string) => {
    const user = await prisma.user.create({
        data: {
            email: email,
            hashedPassword: password
        }
    });
    return user;
}

export const updatePasword = async (userId: string, newPassword: string) => {
    const user = await prisma.user.update({
        where: { id: userId },
        data: {
            hashedPassword: newPassword
        }
    });
    return user;
}

export const remove = async (userId: string) => {
    const user = await prisma.user.delete({
        where: { id: userId }
    });
    return user;
}