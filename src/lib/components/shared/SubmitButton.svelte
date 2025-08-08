<script lang="ts">
	import { Loader } from '@lucide/svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	export let loading: boolean = false;
	export let disabled: boolean = false;
	export let buttonText: string = 'Sign In';
	export let onsubmit: () => void = () => {};
	export let className: string = 'w-full h-14 mt-2';
	export let buttonLoadingText: string = 'Signing in...';
	export let variant: 'secondary' | 'ghost' | 'link' | 'default' = 'default';
</script>

<Button type="submit" {variant} onclick={onsubmit} {disabled} class={className}>
	{#if loading}
		<Loader class="h-4 w-4 animate-spin" />
		<span>{buttonLoadingText}</span>
	{:else}
		<slot />
		<span>{buttonText}</span>
	{/if}
</Button>
