<script>
	import Hamburger from '$lib/components/Hamburger.svelte'
	import Player from '$lib/components/Player/Player.svelte'
	import '../styles.css'
</script>

<Hamburger />
<main class="pb-40">
	<slot />
	<Player />
</main>
