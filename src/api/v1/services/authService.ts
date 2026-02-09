import prisma from '../../../config/prisma.js'
import bcrypt from 'bcryptjs';

// bcrypt accepts 'string' only, not 'String'
export const registUser = async (email: string, password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
        data: {
            email: email,
            hashedPassword: hashedPassword,
        },
    });

    return newUser;
}

export const loginUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        throw new Error("المستخدم ده مش موجود أصلاً!");
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
    if (!isPasswordValid) {
        throw new Error("كلمة السر غلط يا صاحبي!");
    }

    return user;
}