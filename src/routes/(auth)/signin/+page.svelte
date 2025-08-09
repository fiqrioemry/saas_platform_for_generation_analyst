<script lang="ts">
	import { enhance } from '$app/forms';
	import { toast } from 'svelte-sonner';

	// Components
	import * as Card from '$lib/components/ui/card/index.js';
	import GoogleButton from '$lib/components/auth/GoogleButton.svelte';
	import ErrorMessage from '$lib/components/shared/ErrorMessage.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { createCrudStore, createEnhancer } from '$lib/utils/crud';
	import GithubButton from '$lib/components/auth/GithubButton.svelte';
	import SubmitButton from '$lib/components/shared/SubmitButton.svelte';

	let initialLoginState = {
		email: '',
		password: ''
	};

	const form = createCrudStore(initialLoginState);

	const handleEnhance = createEnhancer(form, {
		resetOnSuccess: true,
		onSuccess: () => {
			toast.success('Login successful! Redirecting...');
		}
	});
</script>

<svelte:head>
	<title>Login | Supabase + SvelteKit Demo</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Sign in to the Supabase + SvelteKit demo application" />
	<meta property="og:description" content="Authentication demo with Supabase and SvelteKit SSR" />
</svelte:head>

<div class="w-full max-w-md px-8 lg:px-0">
	<!-- Header -->
	<Card.Header class="text-center">
		<Card.Title class="text-2xl font-bold">Task Generator</Card.Title>
		<Card.Description>Create new account and start generating tasks</Card.Description>
	</Card.Header>
	<!-- Error Message -->
	{#if form.error}
		<ErrorMessage message={form.error} onclearError={form.clearMessages} />
	{/if}

	<!-- Login Form -->
	<form method="POST" action="?/login" use:enhance={handleEnhance} class="mb-6">
		<div class="space-y-2">
			<Label for="email">Email</Label>
			<Input
				id="email"
				type="email"
				placeholder="john.doe@example.com"
				bind:value={form.data.email}
				disabled={form.loading}
				required
			/>
		</div>

		<div class="space-y-2">
			<Label for="password">password</Label>
			<Input
				id="password"
				type="password"
				placeholder="***********"
				bind:value={form.data.password}
				disabled={form.loading}
				required
			/>
		</div>

		<div class="text-end">
			<a
				href="/forgot-password"
				class="text-sm text-blue-500 hover:cursor-pointer hover:underline disabled:opacity-50"
			>
				Forgot password?
			</a>
		</div>

		<SubmitButton
			buttonText="Sign In"
			loading={form.loading}
			disabled={form.loading}
			buttonLoadingText="Signing In..."
		/>
	</form>

	<!-- Divider -->
	<div class="relative mb-6">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t border-muted-foreground/80"></span>
		</div>
		<div class="relative flex justify-center text-sm">
			<span class="bg-background px-2 text-muted-foreground">Or continue with</span>
		</div>
	</div>

	<!-- Google Sign In -->
	<div class="mb-6">
		<GoogleButton loading={form.loading} />
		<GithubButton loading={form.loading} />
	</div>

	<!-- Footer -->

	<div class="mt-8 text-center">
		<p class="text-sm text-muted-foreground">
			Dont have an account?
			<a
				href="/signup"
				class="cursor-pointer font-medium text-blue-500 transition-colors hover:text-blue-500/80"
			>
				sign up
			</a>
		</p>
	</div>
</div>
