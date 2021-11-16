<script context="module" lang="ts">
	export const prerender = true;
  import Project from "$lib/Project.svelte";
  import projects from '$lib/projects.json';
</script>

<script lang="ts">
	// do something
</script>

<svelte:head>
	<title>Cor</title>
</svelte:head>

<section class="my-8">
  <h2 class="text-3xl font-bold">About</h2>
  <p class="mb-8">I'm a full-stack software engineer who loves writing in Rust and working on cloud infrastructure, but likes doing (almost) every kind of programming. I enjoy working on creative solutions to complex problems, learning about new technologies and working together with a great team.</p>

  <h2 class="text-2xl font-bold mb-8">Recent Professional Work</h2>
  <div class="ml-4">
    <Project project={projects[0]}/>
    <Project project={projects[1]}/>
  </div>



  <h2 class="font-bold text-2xl mt-16">History</h2>
  <p class="mb-8">My interest in programming started when I was 11 years old. My dad taught me how to write basic command line programs in C, and since then I've worked on a lot of different programming projects, using numerous languages, frameworks and technologies. I have worked professionally as a front end web developer and designer for multiple clients, and continue to do so. I also occasionally deliver tech support to one person businesses, friends, and my family.</p>
  <p>I'm currently in my second year of studying <i>Computer Science and Game Development</i> at the Utrecht University. While working on a lot of programming projects, I also managed to get my high school degree in 2018. I did VWO NT with extra <i>Mathematics, Computer Science</i> and <i>Art</i> as my chosen subjects. I graduated with a 9 for <i>Mathematics B, Mathematics D</i> and <i>Computer Science</i>, and an 8 for <i>Physics</i> and <i>English.</i></p>
</section>
