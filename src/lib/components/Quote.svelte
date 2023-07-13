<script lang="ts">
	import type { Quote } from '$lib/pocketbase';

	export let quote: Quote;
</script>

<div class="quote space-y-1 py-8">
	<h2>{quote.book}</h2>
	<p class="text-xl">{quote.text}</p>
	<p class="text-gray-600">{new Date(quote.created).toLocaleString()}</p>
</div>
