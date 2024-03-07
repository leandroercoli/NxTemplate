import { Prisma } from '@prisma/client-app-1';

export type Query = {
    take?: number;
    skip?: number;
};

export type DbError = {
    code: number;
    message: string;
};

// Map of database errors
export const DB_ERROR_DICTIONARY: Record<number, DbError> = {
    0: {
        code: 0,
        message: 'Unknown error',
    },
    100: {
        code: 100,
        message: 'Post not found',
    },
    101: {
        code: 101,
        message: 'User not found',
    },
    102: {
        code: 102,
        message: 'User not signed in',
    },
};

// ------------- Composite types

export type UserWithPosts = Prisma.UserGetPayload<{
    include: {
        Posts: true;
    };
}>;

export type PostWithAuthos = Prisma.PostGetPayload<{
    include: {
        Author: true;
    };
}>;
