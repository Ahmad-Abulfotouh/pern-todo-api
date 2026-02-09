import bcrypt from 'bcryptjs';

type HashPasswordFunc = (password: string) => Promise<string>;
type CompareHashedPasswordsFunc = (firstPassword: string, secondPassword: string) => Promise<boolean>;

export const hashPassword: HashPasswordFunc = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export const compareHashedPasswords: CompareHashedPasswordsFunc = async (firstPassword, secondPassword) => {
    return await bcrypt.compare(firstPassword, secondPassword);
}