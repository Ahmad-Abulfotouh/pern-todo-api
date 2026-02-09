import prisma from '../../../config/prisma.js';

export const getAll = async (userId: string) => {
    const allUsers = await prisma.todo.findMany({
        where: { userId: userId },
        select: {
            id: true,
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

export const update = async (todoId: number, newData: any) => {
    if(newData.checked) {
        newData.checked = Boolean(newData.checked);
    }
    const user = await prisma.todo.update({
        where: { id: todoId },
        data: newData
    });
    return user;
}

export const remove = async (todoId: number) => {
    const user = await prisma.todo.delete({
        where: { id: todoId }
    });
    return user;
}