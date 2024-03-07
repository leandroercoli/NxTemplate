'use client';

import { User } from '@prisma/client-app-1';
import { createContext, useContext } from 'react';

export const SignedInUserContext = createContext<User | null>(null);

export function useSignedInUser() {
    return useContext(SignedInUserContext);
}

// User provider. Gets the signed in user from Prisma and exposes it to the app
export function SignedInUserProvider({
    children,
    signedInUser,
}: Readonly<{
    children: React.ReactNode;
    signedInUser: User | null;
}>) {
    return (
        <SignedInUserContext.Provider value={signedInUser}>
            {children}
        </SignedInUserContext.Provider>
    );
}
