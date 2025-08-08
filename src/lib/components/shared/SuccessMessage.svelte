<script lang="ts">
	import { CircleCheck, X } from '@lucide/svelte';

	interface Props {
		message?: string | null;
		submessage?: string;
		dismissible?: boolean;
		onclearSuccess?: () => void;
	}

	let { message, submessage, onclearSuccess, dismissible = true }: Props = $props();
</script>

<div class="mb-4 flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4">
	<CircleCheck class="h-6 w-6 flex-shrink-0 fill-green-600 text-white" />
	<div class="flex-1">
		<p class="text-sm font-medium text-green-800">{message}</p>
		<p class="text-xs text-green-700">{submessage}</p>
	</div>
	{#if dismissible && onclearSuccess}
		<button
			type="button"
			onclick={onclearSuccess}
			class="flex-shrink-0 rounded-md p-1.5 text-green-600 hover:bg-green-100 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 focus:outline-none"
		>
			<span class="sr-only">Dismiss</span>
			<X class="h-4 w-4" />
		</button>
	{/if}
</div>
