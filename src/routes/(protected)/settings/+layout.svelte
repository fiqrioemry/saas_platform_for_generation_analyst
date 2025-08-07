<script>
	import { page } from '$app/state';
	import { CodeIcon, UserIcon } from '@lucide/svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	let { children } = $props();
	let currentPage = $derived(page.url.pathname);
	let navItems = [
		{ name: 'profile', icon: UserIcon, path: '/settings/profile' },
		{ name: 'preferences', icon: CodeIcon, path: '/settings/preference' }
	];
</script>

<section class="mx-auto w-full max-w-7xl px-4 py-6">
	<div class="flex items-center gap-4">
		{#each navItems as item}
			<Button
				class="w-44"
				href={item.path}
				variant={currentPage === item.path ? 'default' : 'ghost'}
			>
				<item.icon class="h-5 w-5" />
				<span>{item.name}</span>
			</Button>
		{/each}
	</div>
	{@render children?.()}
</section>
