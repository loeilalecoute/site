<script>
	import Navigation from '$lib/components/NavigationWrapper.svelte'
	import Player from '$lib/components/Player/Player.svelte'
	import '../styles.css'
</script>

<Navigation />
<main>
	<slot />
	<Player />
</main>
