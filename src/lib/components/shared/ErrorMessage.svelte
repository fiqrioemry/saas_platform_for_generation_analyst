<script lang="ts">
	import { X } from '@lucide/svelte';
	export let message: any;
	export let onclearError: () => void = () => {};
</script>

<div class="rounded-lg border border-destructive/20 bg-destructive/10 p-4">
	<div class="flex items-center justify-between">
		<span class="flex-1 text-sm text-destructive">{message}</span>
		<button
			type="button"
			on:click={onclearError}
			class="-m-1 rounded p-1 text-destructive transition-colors hover:text-destructive/80 focus:ring-2 focus:ring-destructive/20 focus:outline-none"
		>
			<X size={16} />
		</button>
	</div>
</div>
