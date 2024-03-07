'use client';

import { Post } from '@prisma/client-app-1';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

// Create a new post
export default function CreateNewPostPage() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSubmit = async () => {
        await toast.promise(
            fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }), // We don't have to send the authorId, the server will get it from the session
            }).then(async (res) => {
                if (!res.ok) {
                    throw new Error('Something went wrong.');
                }

                setTitle('');
                setContent('');

                const newPost = (await res.json()) as unknown as Post;

                // Redirect to the post just created
                router.push(`/posts/${newPost.id}`);
                router.refresh();
            }),
            {
                pending: 'Creating post...',
                success: 'Post created!',
                error: 'Failed to create post.',
            },
        );
    };

    return (
        <div className="flex flex-col gap-8 w-full">
            <h1 className="text-4xl font-bold">Create a new post</h1>
            <form
                className="flex flex-col gap-8 max-w-lg"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
            >
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-lg bg-transparent "
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="text-lg"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Create post
                </button>
            </form>
        </div>
    );
}
