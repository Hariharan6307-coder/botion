import { redirect, type Handle } from "@sveltejs/kit";

const authGuard: Handle = async ({event, resolve}) => {
    const currentPath = event.url.pathname;
    
    // Allow API routes
    if (currentPath.startsWith('/api')) {
        return resolve(event);
    }

    const user = event.locals.user;
    
    // If no user and trying to access protected route, redirect to login
    if (!user && currentPath !== "/") {
        throw redirect(303, "/");
    }
    
    return resolve(event);
}

export default authGuard