<script lang="ts">
	import Header from '$lib/header/Header.svelte';
</script>

<Header />

<main class="max-w-4xl mx-auto">
	<slot />
</main>

<style windi:preflights:global windi:safelist:global>
</style>
