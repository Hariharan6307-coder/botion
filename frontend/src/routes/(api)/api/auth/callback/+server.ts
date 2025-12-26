import {redirect} from "@sveltejs/kit";

export const GET = async (event) => {
    const {url, locals: {supabase}} = event;

    const code = url.searchParams.get("code") as string;
    const next = url.searchParams.get("next") || "/main";
    const errorCode = url.searchParams.get("error") as string;

    if (errorCode) {
        console.error("Error during OAuth callback:", errorCode);
        throw redirect(303, "/");
    }

    if (code) {
        const {error} = await supabase.auth.exchangeCodeForSession(code);
        if (!error) {
            throw redirect(303, next);
        }
        console.error("Error exchanging code for session:", error);
    }

    throw redirect(303, '/');
}