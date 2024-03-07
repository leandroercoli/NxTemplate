import {
    getPosts,
    getSignedInUser,
    postSchema,
    prisma,
} from '@monorepo/database';
import { NextRequest, NextResponse } from 'next/server';

// Get all posts with pagination
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const take = Number(searchParams.get('take')) || 10;
        const page = searchParams.get('page') || '1';
        const skip = page ? (parseInt(page) - 1) * take : undefined;

        const data = await getPosts({ skip, take });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

// Create a new post
export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json();

        // Check that we have all the data for a Post
        const postData = postSchema.parse(body);

        // Get signed in user
        const signedInUser = await getSignedInUser();
        if (!signedInUser) throw new Error('User not signed in');

        const queryResponse = await prisma.post.create({
            data: {
                ...postData,
                authorId: signedInUser?.id,
            },
        });
        return NextResponse.json(queryResponse);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

// Delete all Posts from a user
export async function DELETE(req: Request, res: Response) {
    try {
        // Get signed in user
        const signedInUser = await getSignedInUser();
        if (!signedInUser) throw new Error('User not signed in');

        // Delete all posts from the signed in user
        const queryResponse = await prisma.post.deleteMany({
            where: {
                authorId: signedInUser?.id,
            },
        });
        return NextResponse.json(queryResponse);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
