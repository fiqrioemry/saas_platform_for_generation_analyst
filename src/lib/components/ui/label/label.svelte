<script lang="ts">
	import { cn } from '$lib/utils.js';

	type $$Props = {
		for?: string;
		class?: string;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let htmlFor: $$Props['for'] = undefined;
</script>

<label
	class={cn(
		'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
		className
	)}
	for={htmlFor}
	{...$$restProps}
>
	<slot />
</label>
