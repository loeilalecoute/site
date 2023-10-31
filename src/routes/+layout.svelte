<script>
	import Hamburger from '$lib/components/Hamburger.svelte'
	import '../styles.css'
</script>

<header class=" right items-center px-4 z-50 py-2 fixed w-full top-0">
	<Hamburger />
</header>
<main>
	<slot />
</main>
