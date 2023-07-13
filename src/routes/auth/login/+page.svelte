<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="flex h-full flex-col items-center justify-center">
	<form method="POST" action="?/login" use:enhance class="flex flex-col space-y-5">
		{#if form?.success}
			<p>Welcome back, user</p>
		{:else}
			<h1 class="mx-auto text-xl font-bold">Log in</h1>
			{#if form?.success === false}
				<p class="alert variant-filled-error">Invalid email or password.</p>
			{/if}
			<div>
				<label for="email" class="label">Email</label>
				<input type="text" name="email" id="email" value={form?.email ?? ''} class="input" />
			</div>
			<div>
				<label for="password" class="label">Password</label>
				<input type="password" name="password" id="password" class="input" />
			</div>
			<button type="submit" class="btn variant-filled self-center">Login</button>
		{/if}
	</form>
</div>
