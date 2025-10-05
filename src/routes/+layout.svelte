<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
