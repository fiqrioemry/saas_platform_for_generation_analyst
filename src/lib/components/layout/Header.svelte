<!-- src/lib/components/layout/Header.svelte -->
<script lang="ts">
	import { user } from '$lib/stores/auth';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<header
	class="sticky top-0 z-50 border-b border-border bg-background/95 shadow-sm backdrop-blur-md"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
		<!-- Logo -->
		<div>
			<h1 class="text-2xl font-bold">My App</h1>
		</div>

		<!-- User Actions -->
		<div class="flex items-center gap-3">
			{#if $user}
				<Button href="/features" variant="ghost" class="rounded-lg">Dashboard</Button>
			{:else}
				<!-- Auth Buttons -->
				<div class="hidden items-center gap-3 md:flex">
					<Button variant="ghost" size="sm" href="/signin">Sign In</Button>
					<Button variant="default" href="/signup">Get Started</Button>
				</div>
			{/if}
		</div>
	</div>
</header>
