<!-- src/routes/(protected)/+layout.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/layout/AppSidebar.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';

	let { children } = $props();

	let isOpen = $state(false);

	const fullWidthPages = ['/services', '/features'];

	// Derived state untuk current path
	const currentPath = $derived(page.url.pathname);
	console.log('this is current path ', currentPath);
	// Effect untuk auto collapse pada halaman tertentu
	$effect(() => {
		if (fullWidthPages.some((path) => currentPath.startsWith(path))) {
			isOpen = false;
		}
	});
</script>

<Sidebar.Provider bind:open={isOpen}>
	<AppSidebar />
	<Sidebar.Inset>
		<header
			class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
		>
			<div class="flex items-center gap-2 px-4">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						{#each currentPath.split('/') as path, index}
							<Breadcrumb.Item class="hidden md:block">
								<Breadcrumb.Link href={'/' + path}>{path}</Breadcrumb.Link>
							</Breadcrumb.Item>
							{#if index < currentPath.length + 1}
								<Breadcrumb.Separator class="hidden md:block" />
							{/if}
						{/each}
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>
		</header>
		<!-- Main content area -->
		<main class="flex-1 overflow-hidden">
			<div class="mx-auto h-full max-w-4xl px-4 sm:px-6 lg:px-8">
				{@render children?.()}
			</div>
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
