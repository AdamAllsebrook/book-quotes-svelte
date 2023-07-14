import { writable } from 'svelte/store';
import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

export const currentUser = writable(pb.authStore.model);

export interface Quote {
    id: number;
    text: string;
    book: string;
    created: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    username: string;
}
