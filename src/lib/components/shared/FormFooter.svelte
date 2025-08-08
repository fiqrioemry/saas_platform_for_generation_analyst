<script lang="ts">
	export let path: string = '/signup';
	export let buttonText: string = 'Sign in';
	export let description: string = 'Already have an account?';
</script>

<div class="mt-8 text-center">
	<p class="text-sm text-muted-foreground">
		{description}
		<a
			href={path}
			class="cursor-pointer font-medium text-blue-500 transition-colors hover:text-blue-500/80"
		>
			{buttonText}
		</a>
	</p>
</div>
