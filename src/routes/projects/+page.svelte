<script lang="ts">
	import projects from "$lib/projects.json";
	import Project from "$lib/Project.svelte";
</script>

<svelte:head>
	<title>Cor | Projects</title>
	<meta name="description" content="Cor's projects" />
</svelte:head>

{#each projects as project }
	<Project {project}/>
{/each}
