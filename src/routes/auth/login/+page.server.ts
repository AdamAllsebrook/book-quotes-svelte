import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
    if (locals.user) {
        throw redirect(303, '/');
    }
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ locals, request }) => {
        const data = await request.formData();
        const email = data.get("email") as string;
        const password = data.get("password") as string;

        try {
            await locals.pb.collection('users').authWithPassword(email, password);
        }
        catch (e) {
            return fail(400, { email, success: false })
        }
        throw redirect(303, '/');
    }
} satisfies Actions;
