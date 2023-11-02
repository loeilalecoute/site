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
	<div class="sticky top-0 -z-10 grid h-screen items-center p-4">
		<Map93 {selected} />
	</div>
	<nav id="projets">
		<ul class="space-y-[1em] px-4 pb-[100vh] md:space-y-0">
			{#each items as { name, code }}
				<MainNavItem bind:selected {name} {code} href="{base}/projets/aubervilliers" />
			{/each}
		</ul>
	</nav>
</section>
