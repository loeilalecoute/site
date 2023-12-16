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
		<ul class="space-y-[1em] px-4 md:space-y-0">
			{#each items as { name, code }}
				<Item bind:selected {name} {code} href="{base}/projets/{getSlug(name)}" />
			{/each}
		</ul>
		<div class="relative h-[50vh] text-center">
			<div class="sticky top-[calc(100%_-_3rem)] sm:top-[calc(100%_-_4.5rem)]">
				<a href="#end" class=" mx-auto block w-10 p-2 sm:bottom-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="animate-bounce"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
						/></svg
					>
				</a>
			</div>
		</div>
	</nav>
</section>
