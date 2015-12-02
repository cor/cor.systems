<style>
	@font-face {
		font-family:"Dalle";
		src:url("fonts/Dalle_Typeface.eot?") format("eot"),
		url("fonts/Dalle_Typeface.woff") format("woff"),
		url("fonts/Dalle_Typeface.ttf") format("truetype"),
		url("fonts/Dalle_Typeface.svg#Dalle") format("svg");
		font-weight: normal;
		font-style:normal;
	}

	html {
		box-sizing: border-box;
		color: #4A4A4A;
		font-family: Dalle;
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
