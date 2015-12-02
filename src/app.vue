<style>

	html {
		box-sizing: border-box;
		color: #4A4A4A;
		font-family: Inconsolata;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		background-color: #eeeeee;
	}

	#app {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}

	h2 {
		font-family: Dalle;
        font-size: 3rem;
	}

	h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	hr {
		border: 0;
		height: 0;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(255, 255, 255, 0.3);
	}

</style>


<template>

<div id="app">

	<site-header></site-header>
	<site-body>

		<site-nav>

		</site-nav>

		<site-main>
			<project-display-container>
				<project-display></project-display>
				<project-display></project-display>
			</project-display-container>
		</site-main>

		<site-info>
		</site-info>

	</site-body>
	<site-footer></site-footer>

</div>

</template>

<script>

	import SiteHeader from './components/site-header.vue'
	import SiteBody from './components/site-body.vue'
	import SiteMain from './components/site-main.vue'
	import SiteNav from './components/site-nav.vue'
	import SiteInfo from './components/site-info.vue'
	import SiteFooter from './components/site-footer.vue'

	import ProjectDisplay from './components/project-display.vue'
	import ProjectDisplayContainer from './components/project-display-container.vue'

	export default {
		data() {
			return {
				msg: 'Hello Vueify'
			}
		},
		components: {
			SiteHeader,
			SiteFooter,
			SiteMain,
			SiteNav,
			SiteInfo,
			SiteBody,
			ProjectDisplay,
			ProjectDisplayContainer
		}
	}

</script>
