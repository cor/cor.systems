<script lang="ts">
	import Header from '$lib/header/Header.svelte';
</script>

<svelte:head>
	<style>
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPEExtrathinItalic/font.woff2') format('woff2'),
			url('/fonts/AvertaPEExtrathinItalic/font.woff') format('woff');
			font-weight: 100;
			font-style: italic;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPEBold/font.woff2') format('woff2'),
			url('/fonts/AvertaPEBold/font.woff') format('woff');
			font-weight: 700;
			font-style: normal;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPEExtrabold/font.woff2') format('woff2'),
			url('/fonts/AvertaPEExtrabold/font.woff') format('woff');
			font-weight: 800;
			font-style: normal;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPERegularItalic/font.woff2') format('woff2'),
			url('/fonts/AvertaPERegularItalic/font.woff') format('woff');
			font-weight: normal;
			font-style: italic;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPEThin/font.woff2') format('woff2'),
			url('/fonts/AvertaPEThin/font.woff') format('woff');
			font-weight: 200;
			font-style: normal;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPEThinItalic/font.woff2') format('woff2'),
			url('/fonts/AvertaPEThinItalic/font.woff') format('woff');
			font-weight: 200;
			font-style: italic;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPEExtraboldItalic/font.woff2') format('woff2'),
			url('/fonts/AvertaPEExtraboldItalic/font.woff') format('woff');
			font-weight: 800;
			font-style: italic;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPELight/font.woff2') format('woff2'),
			url('/fonts/AvertaPELight/font.woff') format('woff');
			font-weight: 300;
			font-style: normal;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPEBlack/font.woff2') format('woff2'),
			url('/fonts/AvertaPEBlack/font.woff') format('woff');
			font-weight: 900;
			font-style: normal;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPESemiboldItalic/font.woff2') format('woff2'),
			url('/fonts/AvertaPESemiboldItalic/font.woff') format('woff');
			font-weight: 600;
			font-style: italic;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPERegular/font.woff2') format('woff2'),
			url('/fonts/AvertaPERegular/font.woff') format('woff');
			font-weight: normal;
			font-style: normal;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPEExtrathin/font.woff2') format('woff2'),
			url('/fonts/AvertaPEExtrathin/font.woff') format('woff');
			font-weight: 100;
			font-style: normal;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPEBoldItalic/font.woff2') format('woff2'),
			url('/fonts/AvertaPEBoldItalic/font.woff') format('woff');
			font-weight: 700;
			font-style: italic;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPESemibold/font.woff2') format('woff2'),
			url('/fonts/AvertaPESemibold/font.woff') format('woff');
			font-weight: 600;
			font-style: normal;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPEBlackItalic/font.woff2') format('woff2'),
			url('/fonts/AvertaPEBlackItalic/font.woff') format('woff');
			font-weight: 900;
			font-style: italic;
		}
		@font-face {
			font-family: 'AvertaPE';
			src: url('/fonts/AvertaPELightItalic/font.woff2') format('woff2'),
			url('/fonts/AvertaPELightItalic/font.woff') format('woff');
			font-weight: 300;
			font-style: italic;
		}

		body {
			/*font-family: "AvertaPE-Regular", Helvetica, Arial, sans-serif;*/
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}

		*,
		*:before,
		*:after {
			box-sizing: inherit;
		}
	</style>
</svelte:head>


<div class="text-gray-900">
	<Header />
	<main class="max-w-2xl mx-auto px-8">
		<slot />
	</main>
</div>

<style windi:preflights:global windi:safelist:global>
</style>
