import { pb, type Quote } from '$lib/pocketbase';
import type { Actions, PageServerLoad } from './$types';

export let load = (async () => {
    const result = await pb.collection('quotes').getList();
    // Convert result into a POJO
    const quotes = JSON.parse(JSON.stringify(result.items)) as Quote[];
    return {
        quotes
    }
}) satisfies PageServerLoad;

export const actions = {
    addQuote: async ({ request }) => {
        const data = await request.formData();
        const book = data.get('book');
        const text = data.get('text');
        const record = await pb.collection('quotes').create({ book, text });
        return JSON.parse(JSON.stringify(record)) as Quote;
    },
    logout: async () => {
        pb.authStore.clear();
    }
} satisfies Actions;
