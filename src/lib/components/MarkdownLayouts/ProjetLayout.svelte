<script>
	import { base } from '$app/paths'
	import { citys as allCitys } from '$lib/93.json'
	import { getPathFromPoints } from '$lib/utils/getPathFromPoints.js'
	import { getSlug } from '$lib/utils/getSlug.js'
	import AudioCard from '../AudioCard.svelte'
	import FooterSpace from '../FooterSpace.svelte'
	import Title from '../Title.svelte'

	/**@type{string}*/
	export let title
	/**@type {{src:string,title:string, infos?:string,description?: string, date:string}[]|undefined}*/
	export let audios
	/**@type {string}*/
	export let city

	let citys = allCitys.filter((el) => el.project)

	/**@type {{previous:string,next:string}}*/
	let pagination

	/**@type {{viewBox:string, path: string} | undefined}*/
	let svgData = undefined
	$: cityData = citys.find((c) => c.name.toUpperCase() === city.toUpperCase())

	/**
	 * @param number {number}
	 * @param divider {number}
	 */
	function modulo(number, divider) {
		return ((number % divider) + divider) % divider
	}

	$: {
		const index = citys.findIndex((c) => c.name.toUpperCase() === city.toUpperCase())
		const next = citys[modulo(index + 1, citys.length)].name
		const previous = citys[modulo(index - 1, citys.length)].name
		pagination = { previous, next }
	}

	$: {
		if (cityData) {
			const width = cityData.right - cityData.left
			const height = cityData.bottom - cityData.top
			const viewBox = `0 0 500 500`
			//@ts-ignore
			const points = cityData.points.map(([x, y]) => [x - cityData.left, y - cityData.top])
			const path = getPathFromPoints(points, width, height)
			svgData = { viewBox, path }
		}
	}
</script>

<div class="fixed inset-0 -z-50 p-16 text-center">
	{#if svgData}
		<svg
			role="figure"
			viewBox={svgData.viewBox}
			class="mx-auto mr-2 inline-block max-h-full max-w-full blur-sm"
		>
			<path
				class=" fill-transparent stroke-blue"
				d={svgData.path}
				stroke-linejoin="round"
				stroke-width="1"
			/>
		</svg>
	{/if}
</div>

<div class="flex min-h-screen flex-col pb-8">
	<Title text={city} capitalize />
	<div class="container mx-auto mb-4 mt-8 px-4">
		<div class="container mx-auto mt-8 justify-between gap-8 space-y-8 xl:flex">
			<article class="prose prose-xl prose-invert mx-auto prose-h2:text-2xl">
				<h2>{title}</h2>
				<slot />
			</article>
			<ul class=" mx-auto max-w-prose divide-y">
				{#if audios}
					{#each audios as audio}
						<li class="py-4">
							<AudioCard {...audio} city={cityData?.name ?? city} />
						</li>
					{/each}
				{/if}
			</ul>
		</div>
	</div>

	<nav class="container mx-auto mt-auto flex justify-between px-4 pt-8 transition-colors">
		<a
			href="{base}/projets/{getSlug(pagination.previous)}/"
			class="group flex items-center gap-1 transition-colors focus-visible:text-yellow"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				width="1em"
				height="1em"
				class="hidden transition-transform delay-100 duration-300 ease-ease-elastic-out-4 group-hover:-translate-x-2 group-hover:delay-0 sm:block"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
				/>
			</svg>

			<span
				class="transition-transform duration-300 ease-ease-elastic-out-4 group-hover:-translate-x-2 group-hover:delay-100"
				>{pagination.previous}</span
			>
		</a>
		<a
			href="{base}/projets/{getSlug(pagination.next)}/"
			class="group flex items-center gap-1 transition-colors focus-visible:text-yellow"
		>
			<span
				class="transition-transform duration-300 ease-ease-elastic-out-4 group-hover:translate-x-2 group-hover:delay-100"
				>{pagination.next}</span
			>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				width="1em"
				height="1em"
				class="hidden transition-transform delay-100 duration-300 ease-ease-elastic-out-4 group-hover:translate-x-2 group-hover:delay-0 sm:block"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
				/>
			</svg></a
		>
	</nav>
</div>
<FooterSpace />
