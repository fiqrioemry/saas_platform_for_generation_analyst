<script lang="ts">
	import { signIn } from '$lib/api/auth';
	import { goto } from '$app/navigation';
	import * as Card from '$lib/components/ui/card/index.js';
	import Label from '$lib/components/ui/label/label.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import GoogleButton from '$lib/components/auth/GoogleButton.svelte';
	import GithubButton from '$lib/components/auth/GithubButton.svelte';

	export let data;
	console.log('data', data);

	let email = '';
	let password = '';
	let isLoading = false;
	let error = '';

	async function handleSignIn() {
		if (!email || !password) {
			error = 'Please fill in all fields';
			return;
		}

		isLoading = true;
		error = '';

		try {
			await signIn(email, password);
			goto('/settings/profile');
		} catch (err: any) {
			error = err.message || 'Failed to sign in';
		} finally {
			isLoading = false;
		}
	}
</script>

<svelte:head>
	<title>Sign In - YourApp</title>
</svelte:head>

<div
	class="relative flex min-h-screen items-center justify-center bg-gray-50 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] [background-size:20px_20px] px-4
            py-12 sm:px-6
            lg:px-8"
>
	<div class="w-full max-w-md space-y-8">
		<!-- Sign In Form -->
		<Card.Root class="shadow-none">
			<Card.Header class="text-center">
				<Card.Title class="text-2xl font-bold">Task Generator</Card.Title>
				<Card.Description>Welcome back! Please sign in to your account.</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-4">
				{#if error}
					<div class="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
						{error}
					</div>
				{/if}

				<form on:submit|preventDefault={handleSignIn} class="space-y-4">
					<div class="space-y-2">
						<Label for="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="Enter your email"
							bind:value={email}
							disabled={isLoading}
							required
						/>
					</div>

					<div class="space-y-2">
						<Label for="password">Password</Label>
						<Input
							id="password"
							type="password"
							placeholder="Enter your password"
							bind:value={password}
							disabled={isLoading}
							required
						/>
					</div>

					<Button type="submit" class="w-full" disabled={isLoading}>
						{isLoading ? 'Signing in...' : 'Sign In'}
					</Button>
				</form>

				<div class="relative mb-4">
					<div class="absolute inset-0 flex items-center">
						<span class="w-full border-t border-muted-foreground/40"></span>
					</div>
					<div class="relative flex justify-center text-sm">
						<span class="bg-background px-2 text-muted-foreground">Or continue with</span>
					</div>
				</div>

				<div class="grid grid-cols-2 items-center gap-4">
					<GoogleButton loading={isLoading} />
					<GithubButton loading={isLoading} />
				</div>

				<div class="text-center">
					<p class="text-sm text-gray-600">
						Don't have an account?
						<a href="/signup" class="font-medium text-blue-600 hover:text-blue-800"> Sign up </a>
					</p>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</div>
