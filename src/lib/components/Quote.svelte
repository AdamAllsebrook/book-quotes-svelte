<script lang="ts">
	import type { Quote } from '$lib/pocketbase';

	export let quote: Quote;
</script>

<div class="quote py-8 space-y-1">
	<h2>{quote.book}</h2>
	<p class="text-xl">{quote.text}</p>
	<p class="text-gray-600">{new Date(quote.created).toLocaleString()}</p>
</div>
