<script>
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
	import { citys as rawCitys } from '../../93.json'
	import Map from '../map.svelte'
	import Item from './item.svelte'

	/**@type {number}*/
	let scrollY = 0

	let selected = ''

	const citys = rawCitys.filter((c) => c.project)

	/**@type {HTMLUListElement}*/
	let linksList

	onMount(() => {
		linksList.addEventListener('scroll', () => {
			scrollY = linksList?.scrollTop ?? 0
		})
	})
</script>

<div class="fixed inset-4">
	<Map {selected} />
</div>
<ul
	class="fixed inset-0 px-32 space-y-16 md:space-y-0 pt-[50vh] overflow-scroll pb-[100vh]"
	bind:this={linksList}
	style="--scrolly:{Math.round(scrollY)}"
	in:fade={{ delay: 250, duration: 300 }}
	out:fade={{ delay: 250, duration: 0 }}
>
	{#each citys as { name, code }}
		<Item {name} {code} bind:selected />
	{/each}
</ul>
<!-- </div> -->
