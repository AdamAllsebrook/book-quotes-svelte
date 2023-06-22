<script lang="ts">
	import Quote from '$lib/components/Quote.svelte';

	export let data;
	let quotes = data.quotes;
</script>

<div class="flex">
	<main class="max-w-[70ch] min-w-full lg:min-w-[70ch] mx-auto flex flex-col border-x-2">
		<h1 class="text-2xl mx-auto py-4">Book Quotes</h1>
		<div class="p-4">
			{#each quotes as quote}
				<Quote {quote} />
			{/each}
		</div>
	</main>
</div>
