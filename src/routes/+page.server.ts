import { pb, type Quote } from '$lib/pocketbase';
import type { PageServerLoad } from './$types';

export let load = (async () => {
    const result = await pb.collection('quotes').getList();
    // Convert result into a POJO
    const quotes = JSON.parse(JSON.stringify(result.items)) as Quote[];
    return {
        quotes
    }
}) satisfies PageServerLoad;
