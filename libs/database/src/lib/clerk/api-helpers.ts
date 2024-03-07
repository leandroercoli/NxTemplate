import { auth } from '@clerk/nextjs';
import { JwtPayload, UserResource } from '@clerk/types';

// Checks if the user is the author CLIENT-SIDE.
export const isUserAuthor = (user?: UserResource | null) => {
    return (
        user?.primaryEmailAddress?.emailAddress ===
        process.env['NEXT_PUBLIC_AUTHOR_EMAIL']
    );
};

// Gets the user session SERVER-SIDE and checks if it's the author.
export const isUserAuthorServer = () => {
    const { sessionClaims } = auth();
    return (
        sessionClaims?.['primary_email_address'] ===
        process.env['NEXT_PUBLIC_AUTHOR_EMAIL']
    );
};

// Gets the user session SERVER-SIDE and throws and error if it's not the author.
export const isUserAuthorServerOrThrow = async () => {
    const isAuthor = isUserAuthorServer();
    if (!isAuthor) {
        throw new Error('Unauthorized');
    }
    return isAuthor;
};

// Gets the authorization header and checks if the user is the author (compare the bearer token with the CLERK_ADMIN_AUTH_TOKEN env variable)
export const isUserClerkAdminServerOrThrow = async (request: Request) => {
    const accessToken = request.headers.get('authorization')?.split(' ')[1];

    if (!accessToken || accessToken !== process.env['CLERK_ADMIN_AUTH_TOKEN']) {
        throw new Error('Unauthorized');
    }

    return true;
};

export function getSlugFromSession(serverSession?: JwtPayload | null) {
    return String(serverSession?.['slug'] || '')
        .split(' ')
        .join('-')
        .toLowerCase();
}

export function getSlugFromClientSession(clientSession?: UserResource | null) {
    return String(clientSession?.fullName || '')
        .split(' ')
        .join('-')
        .toLowerCase();
}
