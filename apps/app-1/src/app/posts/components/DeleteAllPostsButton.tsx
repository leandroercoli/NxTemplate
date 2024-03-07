'use client';

import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

// Button to delete all posts
export default function DeleteAllPostsButton() {
    const router = useRouter();
    const onDelete = async () => {
        if (!confirm('Are you sure you want to delete all posts?')) {
            return;
        }

        await toast.promise(
            fetch('/api/posts', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(async (res) => {
                if (!res.ok) {
                    throw new Error('Something went wrong.');
                }

                // Redirect to the home page
                router.push('/');
                router.refresh();
            }),
            {
                pending: 'Deleting posts...',
                success: 'Posts deleted!',
                error: 'Failed to delete posts.',
            },
        );
    };

    return (
        <Button onClick={onDelete} outline gradientDuoTone="pinkToOrange">
            Delete all posts
        </Button>
    );
}
