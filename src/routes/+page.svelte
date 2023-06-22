<script lang="ts">
	import Quote from '$lib/components/Quote.svelte';

	export let data;
	let quotes = data.quotes;
</script>

{#each quotes as quote}
	<Quote {quote} />
{/each}
