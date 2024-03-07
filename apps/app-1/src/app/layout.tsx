import {
    ClerkLoaded,
    ClerkLoading,
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';
import { getSignedInUser } from '@monorepo/database';
import { SignedInUserProvider } from '@monorepo/shared';
import { ToastProvider } from '@monorepo/ui';
import { Analytics } from '@vercel/analytics/react';
import { Button } from 'flowbite-react';
import type { Metadata } from 'next';
import { Lato, Raleway } from 'next/font/google';

import './global.css';
import Loading from './loading';

const raleway = Raleway({
    subsets: ['latin'],
    variable: '--font-raleway',
});
const lato = Lato({
    subsets: ['latin'],
    variable: '--font-lato',
    display: 'swap',
    weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
    title: 'App 1',
    description: 'App 1 is a great app.',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const signedInUser = await getSignedInUser();

    return (
        <html
            lang="en"
            suppressHydrationWarning
            style={{ scrollBehavior: 'smooth' }}
            className={`${raleway.variable} ${lato.variable} dark`}
        >
            <ClerkProvider>
                <body className="w-screen min-h-screen bg-neutral-950 text-neutral-100 flex flex-col overflow-y-auto">
                    <ClerkLoading>
                        <Loading />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <SignedInUserProvider signedInUser={signedInUser}>
                            <SignedOut>
                                <div className="w-full flex-1 flex justify-center items-center">
                                    <SignInButton>
                                        <Button
                                            gradientDuoTone="purpleToPink"
                                            size="xl"
                                        >
                                            Sign In
                                        </Button>
                                    </SignInButton>
                                </div>
                            </SignedOut>
                            <SignedIn>
                                <>
                                    <div className="w-full h-20 flex justify-between items-center gap-4 px-8">
                                        <h1 className="text-3xl font-bold flex-1">
                                            App 1
                                        </h1>
                                        {signedInUser?.displayName ||
                                            'Anonymous'}
                                        <UserButton />
                                    </div>
                                    <div className="w-full flex-1 flex p-8">
                                        {children}
                                    </div>
                                </>
                            </SignedIn>
                        </SignedInUserProvider>
                    </ClerkLoaded>
                    <ToastProvider />
                    <Analytics />
                </body>
            </ClerkProvider>
        </html>
    );
}
