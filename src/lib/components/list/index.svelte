<script>
	import { onMount } from 'svelte'
	import { citys as rawCitys } from '../../93.json'
	import Map from '../map.svelte'
	import Item from './item.svelte'

	/**@type {number}*/
	let scrollY

	let selected = ''

	const citys = rawCitys.filter((c) => c.project)

	/**@type {HTMLUListElement}*/
	let linksList

	// onMount(() => {
	// 	const observer = new IntersectionObserver(
	// 		(entries) => {
	// 			for (const { isIntersecting, target } of entries) {
	// 				if (!isIntersecting) return
	// 				const element = target
	// 				const code = element.getAttribute('data-code')
	// 				console.log(code)
	// 				if (code) {
	// 					selected = code
	// 				}
	// 			}
	// 		},
	// 		{
	// 			rootMargin: '-50% 0% -50% 0%'
	// 		}
	// 	)
	// 	const items = linksList.querySelectorAll('li')
	// 	for (const link of items) {
	// 		observer.observe(link)
	// 	}
	// })
</script>

<svelte:window bind:scrollY />
<div class="h-screen sticky top-0 -z-10 flex p-4">
	<Map {selected} />
</div>
<ul
	class="container mx-auto px-2 space-y-16 md:space-y-0 pb-[100vh] mt-[-50vh]"
	bind:this={linksList}
	style="--scrolly:{Math.round(scrollY)}"
>
	{#each citys as { name, code }}
		<Item {name} {code} bind:selected />
	{/each}
</ul>
