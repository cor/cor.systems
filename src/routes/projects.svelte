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

<section class="my-8">
  <h2 class="text-3xl font-bold">Projects</h2>
  <p class="mb-8">These are (almost) all projects I worked on. Some of them are personal, others were made for my study, and others are professional projects. The older the project, the worse the code is, but each project contributed to my programming experience and learning process.</p>


  {#each projects as project}
    <Project {project}/>
  {/each}
</section>

