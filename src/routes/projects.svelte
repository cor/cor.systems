<script context="module" lang="ts">
    export const prerender = true;
</script>

<script lang="ts">
    import projects from '$lib/projects.json';
</script>

<svelte:head>
  <title>Cor | Projects</title>
</svelte:head>

{#each projects as project}
  <div class="my-16">
    <h3 class="text-2xl font-bold">{project.title}</h3>
    <span class="italic">{project.type}, {project.date}</span>
    <p>{project.description}</p>
    <div>
      {#each project.technologies as tech}
        <div class="px-4 inline-block p1-2 mr-2 mt-2 rounded bg-green-500 text-white font-semibold">{tech}</div>
      {/each}
    </div>
    {#if project.githubPage}
      <a href="{`https://github.com/${project.githubPage}`}" class="block my-2 font-bold text-green-500 underline">View {project.githubPage} on GitHub</a>
    {/if}

    {#if project.contributors}
      {project.contributors}
    {/if}

    {#if project.externalLinks}
      {#each project.externalLinks as link}
        <a href="{link.link}" class="block my-2 font-bold text-green-500 underline">{link.title}</a>
      {/each}
    {/if}
  </div>
{/each}