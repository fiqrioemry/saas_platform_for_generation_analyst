<script lang="ts">
	import NavMain from './NavMain.svelte';
	import NavUser from './NavUser.svelte';
	import { user } from '$lib/stores/auth';
	import { HomeIcon } from '@lucide/svelte';
	import type { ComponentProps } from 'svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	let {
		ref = $bindable(null),
		collapsible = 'icon',
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {collapsible} {...restProps}>
	<Sidebar.Header
		class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
	>
		<div class="flex items-center gap-4">
			<div
				class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
			>
				<HomeIcon class="size-4" />
			</div>
			<div class="grid flex-1 text-left text-xl leading-tight font-semibold">
				<h1 class="truncate">MY APP</h1>
			</div>
		</div>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={$user?.user_metadata} />
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
