export declare const getById: (userId: string) => Promise<{
    email: string;
}>;
export declare const add: (email: string, password: string) => Promise<{
    id: string;
    email: string;
    hashedPassword: string;
    createdAt: Date;
}>;
export declare const updatePassword: (userId: string, newPassword: string) => Promise<string>;
//# sourceMappingURL=userService.d.ts.map