<script lang="ts">
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<form
	method="POST"
	action="?/addQuote"
	use:enhance={() => {
		return async ({ result }) => {
			if (result.type === 'success') {
				dispatch('addQuote', result.data);
			}
		};
	}}
	class="space-y-5 flex flex-col border-y-2 p-4"
>
	<div class="flex flex-col">
		<label for="book">Book</label>
		<input type="text" name="book" placeholder="Book" />
	</div>
	<div class="flex flex-col">
		<label for="text">Quote</label>
		<input type="text" name="text" placeholder="Quote" />
	</div>
	<button type="submit">Publish Quote</button>
</form>
