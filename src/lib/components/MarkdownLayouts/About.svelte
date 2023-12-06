<script>
	import { browser } from '$app/environment'
	import Title from '../Title.svelte'
	import Toc from '../Toc.svelte'
	import { citys, width, height } from '$lib/93.json'
	import { getPathFromPoints } from '$lib/utils/getPathFromPoints.js'
	import FooterSpace from '../FooterSpace.svelte'

	/**@type{string}*/
	export let title
</script>

<svelte:head>
	<title>À propos • L'œil à l'écoute</title>
</svelte:head>
<div class="fixed inset-0 -z-50 p-16 text-center">
	<svg
		role="figure"
		viewBox={`0 0 500 500`}
		class="  mx-auto mr-2 inline-block h-full max-h-full max-w-full blur-sm"
	>
		{#each citys as { code, points }}
			<path
				class="fill-gray-900 stroke-blue/40 stroke-[2] transition-opacity duration-500"
				d={getPathFromPoints(points, width, height)}
				stroke-linejoin="round"
			/>
		{/each}
	</svg>
</div>

<Title text={title} />
<div class="container mx-auto mt-12 flex flex-row-reverse justify-center">
	{#if browser}
		<aside class="ml-auto hidden max-w-[33ch] px-4 xl:block">
			<div class="sticky top-[20%]">
				<Toc />
			</div>
		</aside>
	{/if}

	<article class="prose prose-lg prose-invert col-start-2 w-full grow px-4 xl:pb-40">
		<slot />
	</article>
</div>
<FooterSpace />
