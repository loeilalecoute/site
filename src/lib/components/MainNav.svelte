<script>
	import { citys } from '$lib/93.json'
	import Map93 from './Map93.svelte'
	import MainNavItem from './MainNavItem.svelte'
	import { base } from '$app/paths'

	const items = citys.filter((c) => c.project)

	/**@type {string|undefined}*/
	let selected = undefined
</script>

<section class="container mx-auto">
	<div class="h-screen sticky top-0 p-4 -z-10 grid items-center">
		<Map93 {selected} />
	</div>
	<nav id="projets">
		<ul class="space-y-[1em] md:space-y-0 pb-[100vh] px-4">
			{#each items as { name, code }}
				<MainNavItem bind:selected {name} {code} href="{base}/projets/aubervilliers" />
			{/each}
		</ul>
	</nav>
</section>
