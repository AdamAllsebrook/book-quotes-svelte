<script lang="ts">
	import Quote from '$lib/components/Quote.svelte';
	import QuoteForm from '$lib/components/QuoteForm.svelte';
	import type { Quote as TQuote } from '$lib/pocketbase';

	export let data;
	let quotes = data.quotes;
	$: quotes, quotes.sort((a, b) => Date.parse(b.created) - Date.parse(a.created));

	function addQuote(e: CustomEvent<TQuote>) {
		quotes = [e.detail, ...quotes];
	}
</script>

<div class="flex">
	<main
		class="mx-auto flex min-w-full max-w-[70ch] flex-col border-x-2 border-surface-200 lg:min-w-[70ch]"
	>
		<div class="flex justify-between px-4">
			<h1 class="py-4 text-2xl">Book Quotes</h1>
			{#if data.userIsValid}
				<form method="POST" action="?/logout" class="flex">
					<button type="submit" class="hover:underline">Sign Out</button>
				</form>
			{:else}
				<div class="flex">
					<a href="/auth/login" class="my-auto hover:underline">Sign In</a>
				</div>
			{/if}
		</div>
		<QuoteForm on:addQuote={addQuote} />
		<div class="p-4">
			{#each quotes as quote}
				<Quote {quote} />
			{/each}
		</div>
	</main>
</div>
