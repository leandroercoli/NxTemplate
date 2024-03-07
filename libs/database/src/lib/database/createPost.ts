import { Post } from '@prisma/client-app-1';

import { checkParamsAndGetUser } from './helpers/db.helpers';
import { prisma } from './helpers/prisma-client';

type CreatePostQuery = {
    title: string;
    content: string;
};

// Add a product to the cart of the user that's currently signed in with Clerk.
export async function createPost(params?: CreatePostQuery): Promise<Post> {
    // Get the signed in user and check that all the required parameters are defined. If not, throw an error.
    const signedInUser = await checkParamsAndGetUser(params, [
        'title',
        'content',
    ]);

    // Create the post
    const post = await prisma.post.create({
        data: {
            title: params!.title,
            content: params!.content,
            authorId: signedInUser!.id,
        },
    });

    return post;
}
