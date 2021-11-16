<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="text-center">
	<h1 class="text-6xl font-bold mt-8">Cor Pruijs</h1>
	<h2 class="">Software Engineer</h2>
	<nav>
		<ul class="flex justify-center gap-4 font-bold underline">
			<li class:text-green-500={$page.path === '/'}><a sveltekit:prefetch href="/">About</a></li>
<!--			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>-->
			<li class:text-green-500={$page.path === '/projects'}><a sveltekit:prefetch href="/projects">Projects</a></li>
			<li class:text-green-500={$page.path === '/contact'}><a sveltekit:prefetch href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>
