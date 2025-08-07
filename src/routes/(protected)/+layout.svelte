<!-- src/routes/(protected)/+layout.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/layout/AppSidebar.svelte';

	let { children } = $props();

	// State untuk kontrol sidebar (default collapsed seperti platform AI)
	let isOpen = $state(false);

	// Halaman yang membutuhkan lebih banyak ruang (seperti chat/conversation)
	const fullWidthPages = ['/services', '/features', '/chat', '/conversation'];

	// Derived state untuk current path
	const currentPath = $derived(page.url.pathname);

	// Effect untuk auto collapse pada halaman tertentu
	$effect(() => {
		// Jika di halaman yang membutuhkan full width, paksa sidebar tertutup
		if (fullWidthPages.some((path) => currentPath.startsWith(path))) {
			isOpen = false;
		}
	});
</script>

<Sidebar.Provider bind:open={isOpen}>
	<AppSidebar openSidebar={isOpen} />
	<Sidebar.Inset>
		<!-- Main content area -->
		<main class="flex-1 overflow-hidden">
			<div class="mx-auto h-full max-w-4xl px-4 sm:px-6 lg:px-8">
				{@render children?.()}
			</div>
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
