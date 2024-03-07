import { prisma } from './helpers/prisma-client';

// Create the user entity from a webhook call when a user is created in Clerk
export async function createUser(clerkUserId?: string, full_name?: string) {
    // Get the user entity if it exists
    let user = await prisma.user.findUnique({
        where: {
            clerkUserId,
        },
    });

    if (!user) {
        console.log('Creating user:', clerkUserId);
        user = await prisma.user.create({
            data: {
                clerkUserId,
                displayName: full_name || 'Anonymous',
                slug:
                    full_name?.split(' ').join('-').toLowerCase() ||
                    'Anonymous',
                imageUrl: `/images/avatar-1.jpg`, // Default avatar
            },
        });
    }

    return user;
}
