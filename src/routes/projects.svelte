<script context="module" lang="ts">
    import Project from "$lib/Project.svelte";
    export const prerender = true;
    import projects from '$lib/projects.json';
</script>

<!--<script lang="ts">-->
<!--</script>-->

<svelte:head>
  <title>Cor | Projects</title>
</svelte:head>

{#each projects as project}
  <Project {project}/>
{/each}