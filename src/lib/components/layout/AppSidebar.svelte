<!-- src/lib/components/layout/AppSidebar.svelte -->
<script lang="ts">
	// Core imports
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	// Icon imports
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Zap, LogOut, CreditCard, GraduationCap, Settings, MailQuestion } from '@lucide/svelte';

	// UI Component imports
	import { user } from '$lib/stores/auth';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	const navSections = [
		{
			title: 'AI Features',
			icon: Zap,
			url: '/features',
			section: 'services'
		},
		{
			title: 'Services',
			icon: Zap,
			url: '/services',
			section: 'services'
		},
		{
			title: 'Archive',
			icon: CreditCard,
			url: '/archive'
		},
		{
			title: 'Transactions',
			icon: CreditCard,
			url: '/transactions',
			section: 'purchasement'
		},
		{
			title: 'Usage',
			icon: GraduationCap,
			url: '/usages',
			section: 'purchasement'
		}
	];

	// Props dari parent
	let { openSidebar } = $props();

	// Derived state
	const currentPath = $derived(page.url.pathname);
	const isCollapsed = $derived(!openSidebar);

	// Utility functions
	function isActive(url: string): boolean {
		return currentPath === url || currentPath.startsWith(url + '/');
	}

	function handleLogout() {
		goto('/signout', { invalidateAll: true });
	}
</script>

<Sidebar.Root class="border-r-0" collapsible="icon">
	<Sidebar.Content class="border-r border-border bg-background">
		<Sidebar.Group class="h-full p-0">
			<!-- Header -->
			<div
				class="flex h-14 items-center border-b border-border px-3 {isCollapsed
					? 'justify-center'
					: 'justify-between'}"
			>
				{#if !isCollapsed}
					<h1 class="text-lg font-semibold">AI App</h1>
				{/if}
				<Sidebar.Trigger class="h-8 w-8" />
			</div>

			<!-- Navigation Menu -->
			<Sidebar.Menu class="flex-1 space-y-1 bg-red-500 px-3">
				<!-- Services Section -->
				{#if !isCollapsed}
					<div class="mb-2 text-xs font-medium text-muted-foreground">SERVICES</div>
				{/if}
				{#each navSections.filter((s) => s.section === 'services') as section}
					<Tooltip.Root>
						<Tooltip.Trigger>
							<Button
								href={section.url}
								class="h-9 justify-start gap-2 {isCollapsed ? 'w-9 justify-center p-0' : 'w-full'}"
								variant={isActive(section.url) ? 'secondary' : 'ghost'}
								size="sm"
							>
								<section.icon class="h-4 w-4 shrink-0" />
								{#if !isCollapsed}
									<span class="text-sm">{section.title}</span>
								{/if}
							</Button>
						</Tooltip.Trigger>
						{#if isCollapsed}
							<Tooltip.Content side="right">
								<p>{section.title}</p>
							</Tooltip.Content>
						{/if}
					</Tooltip.Root>
				{/each}

				<!-- Archive Section -->
				{#each navSections.filter((s) => !s.section) as section}
					<Tooltip.Root>
						<Tooltip.Trigger>
							<Button
								href={section.url}
								class="h-9 justify-start gap-2 {isCollapsed ? 'w-9 justify-center p-0' : 'w-full'}"
								variant={isActive(section.url) ? 'secondary' : 'ghost'}
								size="sm"
							>
								<section.icon class="h-4 w-4 shrink-0" />
								{#if !isCollapsed}
									<span class="text-sm">{section.title}</span>
								{/if}
							</Button>
						</Tooltip.Trigger>
						{#if isCollapsed}
							<Tooltip.Content side="right">
								<p>{section.title}</p>
							</Tooltip.Content>
						{/if}
					</Tooltip.Root>
				{/each}

				<!-- Purchasement Section -->
				{#if !isCollapsed}
					<div class="mb-2 text-xs font-medium text-muted-foreground">PURCHASEMENT</div>
				{/if}
				{#each navSections.filter((s) => s.section === 'purchasement') as section}
					<Tooltip.Root>
						<Tooltip.Trigger>
							<Button
								href={section.url}
								class="h-9 justify-start gap-2 {isCollapsed ? 'w-9 justify-center p-0' : 'w-full'}"
								variant={isActive(section.url) ? 'secondary' : 'ghost'}
								size="sm"
							>
								<section.icon class="h-4 w-4 shrink-0" />
								{#if !isCollapsed}
									<span class="text-sm">{section.title}</span>
								{/if}
							</Button>
						</Tooltip.Trigger>
						{#if isCollapsed}
							<Tooltip.Content side="right">
								<p>{section.title}</p>
							</Tooltip.Content>
						{/if}
					</Tooltip.Root>
				{/each}
			</Sidebar.Menu>

			<!-- Footer Section -->
			<div class="border-t border-border">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<Button
							variant="ghost"
							class="flex items-center gap-2 {isCollapsed
								? 'h-9 w-9 justify-center p-0'
								: 'w-full justify-start'}"
						>
							<Avatar.Root class="shrink-0 rounded-lg {isCollapsed ? 'h-6 w-6' : 'h-8 w-8'}">
								<Avatar.Image
									src={$user?.user_metadata.avatar_url}
									alt={$user?.user_metadata.full_name}
								/>
								<Avatar.Fallback class={isCollapsed ? 'text-xs' : 'text-sm'}>
									{$user?.user_metadata.full_name?.charAt(0) || 'U'}
								</Avatar.Fallback>
							</Avatar.Root>
							{#if !isCollapsed}
								<div class="min-w-0 text-start">
									<span class="block truncate text-sm font-medium"
										>{$user?.user_metadata.full_name}</span
									>
									<p class="truncate text-xs text-muted-foreground">{$user?.email}</p>
								</div>
							{/if}
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-60" align={isCollapsed ? 'center' : 'start'}>
						<DropdownMenu.Label>{$user?.email}</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Group>
							<a href="/settings">
								<DropdownMenu.Item>
									<Settings />
									<span>Settings</span>
								</DropdownMenu.Item>
							</a>
							<a href="/support">
								<DropdownMenu.Item>
									<MailQuestion />
									<span>Support</span>
								</DropdownMenu.Item>
							</a>
						</DropdownMenu.Group>
						<DropdownMenu.Separator />
						<DropdownMenu.Item onclick={handleLogout}>
							<LogOut />
							<span>Log out</span>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
