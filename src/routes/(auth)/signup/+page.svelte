<script lang="ts">
	import { signUp } from '$lib/api/auth';
	import { goto } from '$app/navigation';
	import * as Card from '$lib/components/ui/card/index.js';
	import Label from '$lib/components/ui/label/label.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	let email = '';
	let password = '';
	let confirmPassword = '';
	let isLoading = false;
	let error = '';
	let success = '';

	async function handleSignUp() {
		if (!email || !password || !confirmPassword) {
			error = 'Please fill in all fields';
			return;
		}

		if (password !== confirmPassword) {
			error = 'Passwords do not match';
			return;
		}

		if (password.length < 6) {
			error = 'Password must be at least 6 characters long';
			return;
		}

		isLoading = true;
		error = '';
		success = '';

		try {
			await signUp(email, password);
			success = 'Account created successfully! Please check your email to verify your account.';
			email = '';
			password = '';
			confirmPassword = '';
		} catch (err: any) {
			error = err.message || 'Failed to create account';
		} finally {
			isLoading = false;
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			handleSignUp();
		}
	}
</script>

<svelte:head>
	<title>Sign Up - YourApp</title>
</svelte:head>

<div
	class="min-h-screen bg-gray-50 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)]
            [background-size:20px_20px]"
>
	<div class="flex min-h-screen">
		<!-- Side Content Panel -->
		<div class="relative hidden overflow-hidden bg-blue-500 lg:flex lg:w-1/2">
			<!-- Background Pattern -->
			<div class="absolute inset-0 bg-black/10"></div>

			<!-- Content -->
			<div class="relative flex items-center justify-center p-12 text-blue-100">
				<div class="max-w-lg">
					<div class="mb-8">
						<h1 class="mb-4 text-4xl font-bold">Welcome to YourApp</h1>
						<p class="text-xl">
							Join thousands of users who are already using our platform to boost their
							productivity.
						</p>
					</div>

					<div class="space-y-6">
						<div class="flex items-start space-x-4">
							<div
								class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20"
							>
								<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<div>
								<h3 class="mb-1 font-semibold">Easy Setup</h3>
								<p>Get started in minutes with our simple onboarding process.</p>
							</div>
						</div>

						<div class="flex items-start space-x-4">
							<div
								class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20"
							>
								<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									/>
								</svg>
							</div>
							<div>
								<h3 class="mb-1 font-semibold">Secure & Private</h3>
								<p>Your data is encrypted and protected with industry-standard security.</p>
							</div>
						</div>

						<div class="flex items-start space-x-4">
							<div
								class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20"
							>
								<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<div>
								<h3 class="mb-1 font-semibold">Lightning Fast</h3>
								<p>Experience blazing fast performance with our optimized platform.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Sign Up Form Section -->
		<div class="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
			<div class="w-full max-w-md space-y-8">
				<!-- Sign Up Form -->
				<Card>
					<CardHeader class="text-center">
						<CardTitle class="text-2xl font-bold">Task Generator</CardTitle>
						<CardDescription>Create new account and start generating tasks</CardDescription>
					</CardHeader>
					<CardContent class="space-y-4">
						{#if error}
							<div
								class="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
							>
								{error}
							</div>
						{/if}

						{#if success}
							<div
								class="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600"
							>
								{success}
							</div>
						{/if}

						<form on:submit|preventDefault={handleSignUp} class="space-y-4">
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
									placeholder="Create a password"
									bind:value={password}
									disabled={isLoading}
									required
								/>
							</div>

							<div class="space-y-2">
								<Label for="confirmPassword">Confirm Password</Label>
								<Input
									id="confirmPassword"
									type="password"
									placeholder="Confirm your password"
									bind:value={confirmPassword}
									disabled={isLoading}
									required
								/>
							</div>

							<Button type="submit" class="w-full" disabled={isLoading}>
								{isLoading ? 'Creating account...' : 'Sign Up'}
							</Button>
						</form>

						<div class="text-center">
							<p class="text-sm text-gray-600">
								Already have an account?
								<a href="/signin" class="font-medium text-blue-600 hover:text-blue-800">
									Sign in
								</a>
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</div>
