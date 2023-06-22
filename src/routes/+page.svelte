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
	<main class="max-w-[70ch] min-w-full lg:min-w-[70ch] mx-auto flex flex-col border-x-2">
		<h1 class="text-2xl mx-auto py-4">Book Quotes</h1>
		<QuoteForm on:addQuote={addQuote} />
		<div class="p-4">
			{#each quotes as quote}
				<Quote {quote} />
			{/each}
		</div>
	</main>
</div>
