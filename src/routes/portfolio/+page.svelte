<script>
	// @ts-ignore
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	import 'photoswipe/dist/photoswipe.css'
	import { onMount } from 'svelte'
	import imagesData from '$lib/_imagesData.json'
	const images = Array.from(Array(28), (_, i) => i).sort(() => Math.random() - 0.5)
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
	{#each images as index}
		<link rel="preload" as="image" href="/portfolio/{index}-placeholder.svg" />
	{/each}
</svelte:head>

<div
	class="grid h-screen w-full snap-both snap-mandatory grid-cols-[repeat(4,446px)] gap-16 overflow-auto p-32 pb-40"
	id="gallery"
>
	{#each images as index}
		<a
			href={`/portfolio/${index}-large.webp`}
			class="group aspect-video h-auto w-full snap-center"
			data-pswp-width={imagesData[index].width}
			data-pswp-height={imagesData[index].height}
			style="background-image: url('/portfolio/{index}-placeholder.svg')"
		>
			<img
				class="h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				src={`/portfolio/${index}-large.webp`}
				alt="An alt text"
				width="446"
				height="251"
				loading="lazy"
			/>
		</a>
	{/each}
</div>

<style>
</style>
