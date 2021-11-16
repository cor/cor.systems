<script>
  export let project;

  $: contributors = (() => {
      if (project.contributors) {
          let contributorSentence = 'Made in cooperation with '
          const contributorCount = project.contributors.length
          // Iterate over all contributors
          for (let i = 0; i < contributorCount; i++) {
              const contributor = project.contributors[i]
              contributorSentence += contributor
              // There are more contributors, determine if this is the secondth last contributor
              if (i + 1 < contributorCount) {
                  if (i + 2 === contributorCount) {
                      // This is the secondth last contributor, add ' and ',
                      contributorSentence += ' and '
                  } else {
                      // This is not the secondth last contributor, add ", "
                      contributorSentence += ', '
                  }
              }
          }
          contributorSentence += '.'
          return contributorSentence
      }
      return null
  })()
</script>

<div class="my-16">
  <h3 class="text-2xl font-bold">{project.title}{#if project.role}, <span class="italic">{project.role}</span> {/if}</h3>
  <span class="italic">{project.type}, {project.date}</span>
  <p>{project.description}</p>
  <div>
    {#each project.technologies as tech}
      <div class="px-4 inline-block p1-2 mr-2 mt-2 rounded bg-green-500 text-white font-semibold">{tech}</div>
    {/each}
  </div>
  {#if contributors}
    <p class="italic mt-4">{contributors}</p>
  {/if}
  {#if project.githubPage}
    <a href="{`https://github.com/${project.githubPage}`}" class="block my-2 font-bold text-green-500 underline">View {project.githubPage} on GitHub</a>
  {/if}
  {#if project.externalLinks}
    {#each project.externalLinks as link}
      <a href="{link.link}" class="block my-2 font-bold text-green-500 underline">{link.title}</a>
    {/each}
  {/if}
</div>