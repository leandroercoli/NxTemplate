'use client';

import { fetcher } from '@monorepo/shared';
import { Post } from '@prisma/client-app-1';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import useSWR from 'swr';

// Display a Post - just for demo purposes, this is a client component that gets the post data from the server with an API call.
export default function PostPage({
    params: { id },
}: {
    params: { id: string };
}) {
    const data = useSWR<Post>(`/api/posts/${id}`, fetcher).data;

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-4xl font-bold">Your Post</h1>
                <Link href="/posts">
                    <Button outline>View all posts</Button>
                </Link>
            </div>
            {!data ? (
                <p className="text-lg">Post not found.</p>
            ) : (
                <div className="flex flex-col gap-2 bg-neutral-800 rounded-lg p-4 max-w-lg">
                    <h1 className="text-4xl font-bold">{data?.title}</h1>
                    <p className="text-lg">{data?.content}</p>
                </div>
            )}
        </div>
    );
}
