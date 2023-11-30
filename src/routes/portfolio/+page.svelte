<script>
	// @ts-ignore
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	import 'photoswipe/dist/photoswipe.css'
	import { onMount } from 'svelte'
	import { mini, placeHolders, larges } from '$lib/_imagesData.json'
	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#gallery',
			children: 'a',
			pswpModule: () => import('photoswipe')
		})
		lightbox.init()
	})
</script>

<svelte:head>
	<title>Portfolio</title>
	{#each placeHolders as { hash }}
		<link rel="preload" as="image" href="/portfolio/{hash}.svg" />
	{/each}
</svelte:head>

<div
	class="grid h-screen w-full snap-both snap-mandatory grid-cols-[repeat(4,446px)] gap-16 overflow-auto p-32 pb-40"
	id="gallery"
>
	{#each mini as { hash, width, height }, index}
		<a
			href={`/portfolio/${larges[index].hash}.webp`}
			class="group aspect-video h-auto w-full snap-center"
			data-pswp-width={larges[index].width}
			data-pswp-height={larges[index].height}
			style="background-image: url('/portfolio/{placeHolders[index].hash}.svg')"
		>
			<img
				class="h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				src="/portfolio/{hash}.webp"
				alt="An alt text"
				{width}
				{height}
				loading="lazy"
			/>
		</a>
	{/each}
</div>

<style>
</style>
