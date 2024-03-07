import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
    // Routes that can be accessed while signed out
    // Normally, admin and api should be private. Since this is a DEMO app, we are making them public and only checking for the user's role when POSTing, PUTing, and DELETEing to the API.
    publicRoutes: ['/(.*)'],
    // Routes that can always be accessed, and have
    // no authentication information
    ignoredRoutes: [],
});
