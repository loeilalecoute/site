<script>
	import Navigation from '$lib/components/NavigationWrapper.svelte'
	import Player from '$lib/components/Player/Player.svelte'
	import '../styles.css'
</script>

<Navigation />
<main class="pb-40">
	<slot />
	<Player />
</main>
