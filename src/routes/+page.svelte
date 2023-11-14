<script>
	import Card from '$lib/components/Card.svelte'
	import HomeHero from '$lib/components/HomeHero.svelte'
	import MainNav from '$lib/components/MainNav.svelte'
</script>

<svelte:head>
	<title>Accueil</title>
</svelte:head>

<HomeHero />
<MainNav />

<section class="mt-32 px-4">
	<ul class="container mx-auto grid gap-16 xl:grid-cols-2 xl:gap-32">
		<Card number={17}>années sur le terter</Card>
		<Card number={26}>villes impliquées en Seine-Saint-Denis</Card>
		<Card number={8600}>participants</Card>
		<Card number={670}>heures de diffusions</Card>
	</ul>
</section>
