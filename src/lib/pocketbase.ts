import PocketBase from 'pocketbase';

// import { writable } from 'svelte/store';

export const pb = new PocketBase('http://127.0.0.1:8090');

export interface Quote {
    id: number;
    text: string;
    book: string;
    created: string;
}
