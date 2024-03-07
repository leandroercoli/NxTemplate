import { auth } from '@clerk/nextjs';
import { Prisma } from '@prisma/client-app-1';

import { DB_ERROR_DICTIONARY } from './db.defs';
import { prisma } from './prisma-client';

// Checks that all the given parameters are defined, and throws an error if not.
export function checkParamsOrThrow(
    params?: Record<string, any>,
    paramsList: string[] = [],
) {
    paramsList.forEach((param) => {
        if (!params?.[param]) {
            throw new Error(`Missing parameter: ${param}`);
        }
    });
}

// Checks that the user is signed in and returns the user from the database that matches the Clerk user ID.
export async function getSignedInUser(include?: Prisma.UserInclude) {
    // Get the signed in user ID from Clerk
    const { userId } = auth();
    if (!userId) return null;

    // There's a signed in user, but it might not be in the database yet.
    // Try 3 times to get the user from the database. This is a workaround for syncing the user signing up and creating the user in the database.
    let user = null;
    for (let i = 0; i < 20; i++) {
        // Quick fix to a sync issue: sometimes multiple users are created with the same slug or clerkUserId.
        // If there are many users with the same slug or clerkUserId (duplicated users), delete all of them except the last one created
        const users = await prisma.user.findMany({
            where: {
                clerkUserId: userId,
            },
            orderBy: {
                createdAt: 'desc',
            },
            include,
        });

        if (users.length > 0) user = users[0];

        if (user) break;

        // Wait 1 second before trying again
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    if (!user) return null;

    return user;
}

// Checks that the user is signed in and returns the user from the database that matches the Clerk user ID, or throws an error if not.
export async function checkAuthAndGetSignedInUser(
    include?: Prisma.UserInclude,
) {
    const user = getSignedInUser(include);
    if (!user) throw new Error(DB_ERROR_DICTIONARY[102].message);

    return user;
}

// Combines the checkParamsOrThrow and checkAuthAndGetSignedInUser functions. Returns the signed in user.
export function checkParamsAndGetUser(
    params?: Record<string, any>,
    paramsList: string[] = [],
) {
    checkParamsOrThrow(params, paramsList);
    return checkAuthAndGetSignedInUser();
}
