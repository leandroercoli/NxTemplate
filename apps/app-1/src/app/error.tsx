'use client';

// Error components must be Client Components
import { Button } from 'flowbite-react';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center gap-2 max-w-md self-center mx-auto">
            <h5 className="text-center text-xl font-semibold p-4 rounded-lg">
                Something went wrong! Please try again.
            </h5>
            <Button
                gradientDuoTone={'purpleToPink'}
                onClick={reset}
                className="w-40"
            >
                Try again
            </Button>
        </div>
    );
}
