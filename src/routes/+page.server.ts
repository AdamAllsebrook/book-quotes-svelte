import type { Quote } from '$lib/pocketbase';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export let load = (async ({ locals }) => {
    const result = await locals.pb.collection('quotes').getList();
    // Convert result into a POJO
    const quotes = JSON.parse(JSON.stringify(result.items)) as Quote[];
    return {
        quotes
    }
}) satisfies PageServerLoad;

export const actions = {
    addQuote: async ({ locals, request }) => {
        const data = await request.formData();
        const book = data.get('book');
        const text = data.get('text');
        const record = await locals.pb.collection('quotes').create({ book, text });
        return JSON.parse(JSON.stringify(record)) as Quote;
    },
} satisfies Actions;
