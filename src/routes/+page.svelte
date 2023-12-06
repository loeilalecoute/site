<script>
	import FooterSpace from '$lib/components/FooterSpace.svelte'
	import HomeCounters from '$lib/components/HomeCounters.svelte'
	import HomeHero from '$lib/components/HomeHero.svelte'
	import ProjectsList from '$lib/components/ProjectsList.svelte'
</script>

<svelte:head>
	<title>L'œil à l'écoute</title>
</svelte:head>

<HomeHero />
<ProjectsList />
<HomeCounters />

<FooterSpace />
