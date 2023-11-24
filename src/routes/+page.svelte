<script>
	import HomeCounters from '$lib/components/HomeCounters.svelte'
	import HomeHero from '$lib/components/HomeHero.svelte'
	import ProjectsList from '$lib/components/ProjectsList.svelte'
</script>

<svelte:head>
	<title>Accueil</title>
</svelte:head>

<HomeHero />
<ProjectsList />
<HomeCounters />
