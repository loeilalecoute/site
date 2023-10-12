<script lang="ts">
	import { onMount } from 'svelte'
	import { sineOut } from 'svelte/easing'
	import { draw } from 'svelte/transition'
	import { citys, height, width } from '../93.json'

	let ready = false
	let drawn = false
	export let selected: string

	let element: SVGSVGElement

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entrie of entries) {
					if (entrie.isIntersecting) {
						ready = true
						setTimeout(() => {
							drawn = true
						}, 2000)
						observer.unobserve(element)
					}
				}
			},
			{
				threshold: 0.5
			}
		)
		observer.observe(element)
	})

	function path(points: number[][]) {
		return `M${points.map(([x, y]) => `${(x / width) * 500}, ${(y / height) * 500}`).join('L ')} Z`
	}
</script>

<svg role="figure" viewBox={`0 0 500 500`} class="max-h-full mx-auto" bind:this={element}>
	<defs>
		<pattern
			id="pattern"
			width="6"
			height="10"
			patternUnits="userSpaceOnUse"
			patternTransform="rotate(45 50 50)"
		>
			<line stroke-width="2px" y2="10" class="stroke-blue/80" />
		</pattern>
	</defs>
	{#each citys as { code, points }}
		{#if ready}
			<path
				id={code}
				in:draw={{ duration: 2000, easing: sineOut, delay: 300 }}
				class=" fill-transparent opacity-30 stroke-blue"
				d={path(points)}
				stroke-linejoin="round"
			/>
		{/if}
		<path
			class="stroke-blue stroke-[2] transition-opacity duration-500 fill-[url(#pattern)]"
			class:opacity-0={selected !== code || !drawn}
			d={path(points)}
			stroke-linejoin="round"
		/>
	{/each}
</svg>
