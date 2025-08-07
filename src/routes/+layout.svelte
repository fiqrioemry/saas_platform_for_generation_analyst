<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { user } from '$lib/stores/auth';
	import { supabase } from '$lib/supabase';
	import { Loader } from '@lucide/svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { invalidate } from '$app/navigation';

	let { children, data } = $props();
	let loading = $state(true);

	onMount(() => {
		user.set(data.user ?? null);

		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== data.session?.expires_at) {
				user.set(data.user ?? null);
				invalidate('supabase:auth');
			}
		});
		loading = false;
		return () => subscription.unsubscribe();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if loading}
	<div class="flex min-h-screen items-center justify-center bg-gray-50">
		<div class="text-center">
			<Loader size={40} class="mx-auto animate-spin" />
			<span>Loading</span>
		</div>
	</div>
{:else}
	{@render children?.()}
{/if}
