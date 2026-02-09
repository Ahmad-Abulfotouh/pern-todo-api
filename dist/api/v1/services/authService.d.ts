export declare const registUser: (email: string, password: string) => Promise<{
    id: string;
    email: string;
    hashedPassword: string;
    createdAt: Date;
}>;
export declare const loginUser: (email: string, password: string) => Promise<{
    id: string;
    email: string;
    hashedPassword: string;
    createdAt: Date;
}>;
//# sourceMappingURL=authService.d.ts.map