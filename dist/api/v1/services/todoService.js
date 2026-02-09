import prisma from '../../../config/prisma.js';
export const getAll = async (userId) => {
    const allTodos = await prisma.todo.findMany({
        where: { userId: userId },
        select: {
            id: true,
            content: true,
            checked: true,
            createdAt: true
        }
    });
    return allTodos;
};
export const add = async (userId, content) => {
    const todo = await prisma.todo.create({
        data: {
            userId: userId,
            content: content
        }
    });
    return todo;
};
export const update = async (todoId, userId, newData) => {
    if (newData.checked) {
        newData.checked = Boolean(newData.checked);
    }
    const updatedTodo = await prisma.todo.update({
        where: {
            id: todoId,
            userId: userId
        },
        data: newData,
        select: {
            id: true,
            content: true,
            checked: true,
            createdAt: true
        }
    });
    return updatedTodo;
};
export const remove = async (todoId, userId) => {
    const deletedTodo = await prisma.todo.delete({
        where: {
            id: todoId,
            userId: userId
        },
        select: {
            id: true
        }
    });
    return deletedTodo;
};
//# sourceMappingURL=todoService.js.map