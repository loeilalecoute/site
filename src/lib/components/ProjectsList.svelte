<script>
	import { citys } from '$lib/93.json'
	import Map93 from './Map93.svelte'
	import Item from './ProjecListItem.svelte'
	import { base } from '$app/paths'
	import { getSlug } from '$lib/utils/getSlug.js'
	import { compareCitys } from '$lib/utils/sortCitys.js'

	const items = citys.filter((c) => c.project)
	items.sort((a, b) => compareCitys(a.name, b.name))

	/**@type {string|undefined}*/
	let selected = undefined
</script>

<section class="container mx-auto" id="navigation">
	<div class="sticky top-0 -z-10 grid h-screen items-center p-4">
		<Map93 {selected} />
	</div>
	<nav id="projets" class="-mt-[50vh]">
		<ul class="space-y-[1em] px-4 pb-[50vmin] md:space-y-0">
			{#each items as { name, code }}
				<Item bind:selected {name} {code} href="{base}/projets/{getSlug(name)}" />
			{/each}
		</ul>
	</nav>
</section>
