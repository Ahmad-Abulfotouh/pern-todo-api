export declare const getAll: (userId: string) => Promise<{
    id: number;
    createdAt: Date;
    content: string;
    checked: boolean;
}[]>;
export declare const add: (userId: string, content: string) => Promise<{
    id: number;
    createdAt: Date;
    userId: string;
    content: string;
    checked: boolean;
}>;
export declare const update: (todoId: number, userId: string, newData: any) => Promise<{
    id: number;
    createdAt: Date;
    content: string;
    checked: boolean;
}>;
export declare const remove: (todoId: number, userId: string) => Promise<{
    id: number;
}>;
//# sourceMappingURL=todoService.d.ts.map