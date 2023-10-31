<script>
	import { citys, height, width } from '$lib/93.json'
	import { intersectionObserver } from '$lib/actions/intersectionObserver.js'
	import { sineOut } from 'svelte/easing'
	import { draw } from 'svelte/transition'

	/**code of the selected city
	 * @type {string|undefined}
	 */
	export let selected

	let visible = false
	let drawn = false

	function onScreenEnter() {
		visible = true
		setTimeout(() => (drawn = true), 2000)
	}

	/**
	 * @param points {number[][]}
	 */
	function path(points) {
		return `M${points.map(([x, y]) => `${(x / width) * 500}, ${(y / height) * 500}`).join('L ')} Z`
	}
</script>

<svg
	role="figure"
	viewBox={`0 0 500 500`}
	class="max-h-full ml-auto"
	use:intersectionObserver={{ once: true, threshold: 0.3 }}
	on:screenEnter={onScreenEnter}
>
	{#each citys as { code, points }}
		{#if visible}
			<path
				in:draw={{ duration: 2000, easing: sineOut, delay: 300 }}
				id={code}
				class=" fill-transparent stroke-blue/30"
				d={path(points)}
				stroke-linejoin="round"
			/>
		{/if}
		<path
			class="stroke-blue/60 stroke-[2] transition-opacity duration-500 fill-blue/80"
			class:opacity-0={selected !== code && draw}
			d={path(points)}
			stroke-linejoin="round"
		/>
	{/each}
</svg>
