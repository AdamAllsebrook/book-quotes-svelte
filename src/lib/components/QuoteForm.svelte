<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
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
			await applyAction(result);
		};
	}}
	class="flex flex-col space-y-5 border-y-2 border-surface-200 p-4"
>
	<div class="flex flex-col">
		<label for="book" class="label">Book</label>
		<input type="text" name="book" placeholder="The Two Towers" class="input" />
	</div>
	<div class="flex flex-col">
		<label for="text" class="label">Quote</label>
		<input
			type="text"
			name="text"
			placeholder="There is some good in this world, and it’s worth fighting for."
			class="input"
		/>
	</div>
	<button type="submit" class="btn variant-filled self-center">Publish Quote</button>
</form>
