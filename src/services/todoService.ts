import prisma from '../config/prisma.js';

export const getAll = async () => {
    const allUsers = await prisma.todo.findMany({
        select: {
            content: true,
            checked: true,
            userId: true
        }
    })
    return allUsers;
}

export const add = async (userId: string, content: string) => {
    const user = await prisma.todo.create({
        data: {
            userId: userId,
            content: content
        }
    });
    return user;
}

export const updateCheckBox = async (todoId: number, newCheckMark: boolean) => {
    const user = await prisma.todo.update({
        where: { id: todoId },
        data: {
            checked: newCheckMark
        }
    });
    return user;
}

export const updateContent = async (todoId: number, newContent: string) => {
    const user = await prisma.todo.update({
        where: { id: todoId },
        data: {
            content: newContent
        }
    });
    return user;
}

export const remove = async (todoId: number) => {
    const user = await prisma.todo.delete({
        where: { id: todoId }
    });
    return user;
}