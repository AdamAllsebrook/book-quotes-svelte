<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { toastStore } from '@skeletonlabs/skeleton';
	import type { ActionData } from './$types';
	import { currentUser, pb } from '$lib/pocketbase';

	export let form: ActionData;
	$: validated = form?.messages !== undefined;
</script>

<div class="flex h-full items-center justify-center">
	<form
		method="POST"
		use:enhance={() => {
			return async ({ result }) => {
				if (result.type === 'failure') {
					const t = { background: 'variant-filled-error', message: 'Error creating account.' };
					toastStore.trigger(t);
				} else {
					pb.authStore.loadFromCookie(document.cookie);
					const t = {
						background: 'variant-filled-success',
						message: `Welcome, ${$currentUser?.username}.`
					};
					toastStore.trigger(t);
				}
				await applyAction(result);
			};
		}}
		class="flex flex-col space-y-5"
	>
		<h1 class="text-xl font-bold">Create account</h1>
		<div>
			<label for="email" class="label">Email</label>
			<input
				name="email"
				type="text"
				placeholder="adam@example.com"
				class={`input ${
					validated ? (form?.messages?.email ? 'input-error' : 'input-success') : ''
				}`}
			/>
			{#if form?.messages?.email}
				<p class="text-error-500-400-token">{form?.messages?.email?.message}</p>
			{/if}
		</div>
		<div>
			<label for="username" class="label">Username</label>
			<input
				name="username"
				type="text"
				class={`input ${
					validated ? (form?.messages?.username ? 'input-error' : 'input-success') : ''
				}`}
				placeholder="Adam"
			/>
			{#if form?.messages?.username}
				<p class="text-error-500-400-token">{form?.messages?.username?.message}</p>
			{/if}
		</div>
		<div>
			<label for="password" class="label">Password</label>
			<input
				name="password"
				type="password"
				class={`input ${
					validated ? (form?.messages?.password ? 'input-error' : 'input-sucess') : ''
				}`}
			/>
			{#if form?.messages?.password}
				<p class="text-error-500-400-token">{form?.messages?.password?.message}</p>
			{/if}
		</div>
		<div>
			<label for="passwordConfirm" class="label">Confirm Password</label>
			<input
				name="passwordConfirm"
				type="password"
				class={`input ${
					validated ? (form?.messages?.passwordConfirm ? 'input-error' : 'input-success') : ''
				}`}
			/>
			{#if form?.messages?.passwordConfirm}
				<p class="text-error-500-400-token">{form?.messages?.passwordConfirm?.message}</p>
			{/if}
		</div>
		<button type="submit" class="btn variant-filled self-center">Sign Up</button>
	</form>
</div>
