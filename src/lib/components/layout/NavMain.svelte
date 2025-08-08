<script lang="ts">
	import { page } from '$app/state';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { Brain, BookOpen, Archive, Plug, KeySquare, CreditCard } from '@lucide/svelte';

	let currentPath = $derived(page.url.pathname);

	const sidebarNav = [
		{ title: 'AI Features', url: '/features', icon: Brain },
		{ title: 'Library', url: '/library', icon: BookOpen },
		{ title: 'Archive', url: '/archive', icon: Archive },
		{ title: 'Integration', url: '/integrations', icon: Plug },
		{ title: 'API', url: '/api', icon: KeySquare },
		{ title: 'Billing', url: '/billing', icon: CreditCard }
	];

	const isActive = (url: string) => {
		if (url === '/') return currentPath === '/';
		return currentPath === url || currentPath.startsWith(`${url}/`);
	};
</script>

<Sidebar.Group>
	<Sidebar.GroupLabel>Platform</Sidebar.GroupLabel>
	<Sidebar.Menu>
		{#each sidebarNav as item (item.url)}
			<a href={item.url}>
				<Sidebar.MenuItem>
					<Sidebar.MenuButton
						tooltipContent={item.title}
						class="data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
						data-active={isActive(item.url)}
					>
						{#if item.icon}
							<item.icon />
						{/if}
						<span>{item.title}</span>
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			</a>
		{/each}
	</Sidebar.Menu>
</Sidebar.Group>
