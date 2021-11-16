<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header class="text-center">
	<h1 class="text-6xl font-bold mt-8">CorCoder</h1>
	<h2 class="font-bold">Software Engineer</h2>
	<nav>
		<ul class="flex justify-center gap-4">
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
<!--			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>-->
			<li class:active={$page.path === '/projects'}><a sveltekit:prefetch href="/projects">Projects</a></li>
		</ul>
	</nav>
</header>
