<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header>
<!--	<div class="corner">-->
<!--		<a href="https://kit.svelte.dev">-->
<!--			<img src={logo} alt="SvelteKit" />-->
<!--		</a>-->
<!--	</div>-->

	<nav>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
		</ul>
	</nav>
</header>
