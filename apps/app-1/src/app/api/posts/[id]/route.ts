import { getSignedInUser, postSchema, prisma } from '@monorepo/database';
import { NextResponse } from 'next/server';

// Get a Post by ID
export async function GET(
    req: Request,
    { params }: { params: { id: string } },
) {
    try {
        const postId = params.id;
        const data = await prisma.post.findUnique({
            where: { id: postId },
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

// Update a post from the signed in user
export async function PUT(
    req: Request,
    { params }: { params: { id: string } },
) {
    try {
        const postId = params.id;
        const body = await req.json();

        // Check that we have all the data for a Post
        const postData = postSchema.parse(body);

        // Get signed in user
        const signedInUser = await getSignedInUser();
        if (!signedInUser) throw new Error('User not signed in');

        // Update the post
        const queryResponse = await prisma.post.update({
            where: { id: postId },
            data: postData,
        });
        return NextResponse.json(queryResponse);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

// Delete a post from the signed in user
export async function DELETE(
    req: Request,
    { params }: { params: { id: string } },
) {
    try {
        // Get signed in user
        const signedInUser = await getSignedInUser();
        if (!signedInUser) throw new Error('User not signed in');

        // Delete the post
        const postId = params.id;
        const queryResponse = await prisma.post.delete({
            where: { id: postId },
        });
        return NextResponse.json(queryResponse);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
