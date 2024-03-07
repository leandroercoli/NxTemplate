import { getPosts } from '@monorepo/database';
import Link from 'next/link';

import DeleteAllPostsButton from './components/DeleteAllPostsButton';

// Display the user's posts
export default async function HomePage() {
    const data = await getPosts();

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="w-full flex justify-between items-center gap-4">
                <h1 className="text-4xl font-bold flex-1">Your Posts</h1>
                <DeleteAllPostsButton />
                <Link
                    href="/new-post"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Create a new post
                </Link>
            </div>
            <div className="flex flex-col gap-8">
                {!data?.length ? (
                    <p className="text-lg">You have no posts.</p>
                ) : (
                    data.map((post) => (
                        <Link href={`/post/${post.id}`} key={post.id}>
                            <div className="flex flex-col gap-2 bg-neutral-800 rounded-lg p-4 max-w-lg">
                                <h1 className="text-4xl font-bold">
                                    {post?.title}
                                </h1>
                                <p className="text-lg">{post?.content}</p>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}
