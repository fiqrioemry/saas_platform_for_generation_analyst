<!-- src/lib/components/dashboard/AppSidebar.svelte -->
<script lang="ts">
	// Core imports
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	// Icon imports
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Zap, LogOut, CreditCard, GraduationCap } from '@lucide/svelte';

	// UI Component imports
	import { profile } from '$lib/stores/auth';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	const navSections = [
		{
			title: 'Feature Services',
			icon: Zap,
			url: '/services'
		},
		{
			title: 'Transactions',
			icon: CreditCard,
			url: '/transactions'
		},
		{
			title: 'usages',
			icon: GraduationCap,
			url: '/usages'
		}
	];

	// Derived state
	const currentPath = $derived(page.url.pathname);

	// Utility functions
	function isActive(url: string): boolean {
		return currentPath === url || currentPath.startsWith(url + '/');
	}

	function handleLogout() {
		goto('/signout', { invalidateAll: true });
	}
</script>

<Sidebar.Root>
	<Sidebar.Content class="border-r border-border bg-background">
		<Sidebar.Group class="h-full p-0">
			<!-- Logo Section -->
			<div class="flex h-16 items-center border-b border-border px-4">
				<h1>Logo App</h1>
			</div>

			<!-- Navigation Menu -->
			<Sidebar.Menu class="space-y-0 p-2">
				{#each navSections as section}
					<Button
						href={section.url}
						class="w-full justify-between hover:-translate-y-0"
						variant={isActive(section.url) ? 'default' : 'ghost'}
					>
						<div class="flex items-center gap-2">
							<section.icon class="h-4 w-4" />
							<span>{section.title}</span>
						</div>
					</Button>
				{/each}

				<div class="min-h-8"></div>
			</Sidebar.Menu>
		</Sidebar.Group>

		<!-- Footer Section -->
		<div class="space-y-2 border-t border-border p-2">
			<div>
				<Avatar.Root>
					<Avatar.Image src={$profile?.avatar_url} alt="@shadcn" />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>
				<div>
					<span class="text-sm font-medium">{$profile?.display_name}</span>
					<span class="text-xs text-muted-foreground">{$profile?.email}</span>
				</div>
			</div>
			<Button onclick={handleLogout} variant="destructive" class="w-full">
				<LogOut class="h-4 w-4" />
				<span>Logout</span>
			</Button>
		</div>
	</Sidebar.Content>
</Sidebar.Root>
