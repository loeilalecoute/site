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
			// showHideAnimationType: 'fade',
			pswpModule: () => import('photoswipe')
		})
		lightbox.init()
	})
</script>

<svelte:head>
	<title>Portfolio</title>
	{#each placeHolders as { hash }}
		<link rel="preload" as="image" href="/portfolio/{hash}.png" />
	{/each}
</svelte:head>

<div
	class="grid h-screen w-full snap-both snap-mandatory grid-cols-[repeat(3,896px)] gap-8 overflow-auto p-32 pb-40"
	id="gallery"
>
	{#each mini as { hash, width, height }, index}
		<a
			href={`/portfolio/${larges[index].hash}.jpg`}
			class=" group aspect-video h-auto w-full snap-center bg-gray-900 bg-cover bg-center bg-no-repeat bg-blend-lighten duration-500"
			data-pswp-width={larges[index].width}
			data-pswp-height={larges[index].height}
			data-cropped="true"
			style="background-image: url('/portfolio/{placeHolders[index].hash}.png')"
		>
			<picture class="block h-full w-full">
				<source srcset="/portfolio/{hash}.webp" type="image/webp" />
				<source srcset="/portfolio/{hash}.jpg" type="image/jpeg" />
				<img
					class="h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					src="/portfolio/{hash}.jpg"
					alt="An alt text"
					{width}
					{height}
					loading="lazy"
				/>
			</picture>
		</a>
	{/each}
</div>

<style>
</style>
