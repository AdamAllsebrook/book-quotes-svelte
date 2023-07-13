import { pb, type User } from '$lib/pocketbase';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
    const user = JSON.parse(JSON.stringify(pb.authStore.model)) as User;
    return {
        user,
        userIsValid: pb.authStore.isValid
    };
}) satisfies LayoutServerLoad;
