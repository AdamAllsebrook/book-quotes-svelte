import { pb } from "$lib/pocketbase";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const load = async () => {
    if (pb.authStore.isValid) {
        throw redirect(303, '/');
    }
};

export const actions = {
    login: async ({ request }) => {
        const data = await request.formData();
        const email = data.get("email") as string;
        const password = data.get("password") as string;

        try {
            await pb.collection('users').authWithPassword(email, password);
        }
        catch (e) {
            return fail(400, { email, success: false })
        }
        throw redirect(303, '/');
    }
} satisfies Actions;
