type HashPasswordFunc = (password: string) => Promise<string>;
type CompareHashedPasswordsFunc = (firstPassword: string, secondPassword: string) => Promise<boolean>;
export declare const hashPassword: HashPasswordFunc;
export declare const compareHashedPasswords: CompareHashedPasswordsFunc;
export {};
//# sourceMappingURL=hashingUtility.d.ts.map