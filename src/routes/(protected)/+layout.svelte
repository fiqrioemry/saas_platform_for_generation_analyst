<!-- src/routes/(protected)/+layout.svelte -->
<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/layout/AppSidebar.svelte';

	let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<div
			class="mx-auto flex h-[calc(100vh-4rem)] w-full max-w-7xl flex-1 flex-col space-y-4 px-4 sm:px-6 lg:px-8"
		>
			{@render children?.()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
