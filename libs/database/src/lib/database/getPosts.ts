import { Prisma } from '@prisma/client-app-1';

import { Query } from './helpers/db.defs';
import { getSignedInUser } from './helpers/db.helpers';
import { prisma } from './helpers/prisma-client';

// Get the user's post from the database for the user that's signed in.
export async function getPosts(params?: Query) {
    const signedInUser = await getSignedInUser();

    if (!signedInUser) return [];

    return await prisma.post.findMany({
        where: {
            authorId: signedInUser.id,
        },
        take: params?.take,
        skip: params?.skip,
    });
}

export type Posts = Prisma.PromiseReturnType<typeof getPosts>;
