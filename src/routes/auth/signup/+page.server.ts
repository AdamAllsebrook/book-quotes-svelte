import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { ClientResponseError } from 'pocketbase';

export const actions = {
    default: async ({ locals, request }) => {
        const data = await request.formData();
        const email = data.get("email") as string;
        const username = data.get("username") as string;
        const password = data.get("password") as string;
        const passwordConfirm = data.get("passwordConfirm") as string;

        try {
            await locals.pb.collection('users').create({ email, username, password, passwordConfirm });
        }
        catch (e) {
            if (e instanceof ClientResponseError) {
                return fail(400, { email, username, success: false, messages: e.data.data })
            }
            else {
                return fail(400, { email, username, success: false, messages: [] })
            }
        }

        try {
            await locals.pb.collection('users').authWithPassword(email, password);
        }
        catch (e) {
            return fail(400, { email, username, success: false, messages: [] })
        }

        throw redirect(303, '/');
    }
} satisfies Actions;
