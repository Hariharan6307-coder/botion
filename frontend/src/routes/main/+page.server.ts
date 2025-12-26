import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals: {user}}) => {
    const username = user?.user_metadata?.full_name;

    return {
        username
    };
}