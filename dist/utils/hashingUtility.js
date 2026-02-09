import bcrypt from 'bcryptjs';
export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
export const compareHashedPasswords = async (firstPassword, secondPassword) => {
    return await bcrypt.compare(firstPassword, secondPassword);
};
//# sourceMappingURL=hashingUtility.js.map