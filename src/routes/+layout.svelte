<script>
	import Navigation from '$lib/components/NavigationWrapper.svelte'
	import Player from '$lib/components/Player/Player.svelte'
	import '../styles.css'
</script>

<svelte:head>
	<meta
		name="description"
		content="Découvrez les émissions de L'Œil à l'Écoute, association dédiée à l'éducation populaire et radiophonique en Seine-Saint-Denis depuis 17 ans. Explorez notre sélection d'enregistrements authentiques, offrant un regard sonore sur la diversité des villes du 93. Plongez dans les récits, les témoignages et l'histoire sonore de cette région, façonnés par ses habitants."
	/>
</svelte:head>
<Navigation />
<main>
	<slot />
	<Player />
</main>
