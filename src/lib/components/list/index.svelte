<script lang="ts">
	import { onMount } from 'svelte'
	import { citys as rawCitys } from '../../93.json'
	import Map from '../map.svelte'
	import Item from './item.svelte'

	let current = ''

	const citys = rawCitys.filter((c) => c.project)

	let linksList: HTMLUListElement

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const { isIntersecting, target } of entries) {
					if (!isIntersecting) return
					const element = target as HTMLElement
					const code = element.getAttribute('data-code')
					if (code) {
						current = code
					}
				}
			},
			{
				rootMargin: ' -50% 0px -50%'
			}
		)
		const items = linksList.querySelectorAll('li')
		for (const link of items) {
			observer.observe(link)
		}
	})
</script>

<div class="h-screen sticky top-0 -z-10 flex p-4">
	<Map {current} />
</div>
<ul class="container mx-auto px-2 space-y-2 pb-[100vh]" bind:this={linksList}>
	{#each citys as { name, code }}
		<Item {name} {code} {current} />
	{/each}
</ul>
