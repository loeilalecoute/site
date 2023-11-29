<script>
	// @ts-ignore
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	import potrace from 'potrace'
	import 'photoswipe/dist/photoswipe.css'
	import { onMount } from 'svelte'
	const images = Array.from(Array(11), (_, i) => i)
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
	class="grid h-screen w-full snap-both snap-mandatory grid-cols-[repeat(4,446px)] gap-4 overflow-auto p-8 pb-40"
	id="gallery"
>
	{#each images as index}
		<a
			href={`/portfolio/${index}-large.webp`}
			class="aspect-video h-auto w-full snap-center"
			data-pswp-width={1000}
			data-pswp-height={666}
			style="background-image: url('/portfolio/{index}-placeholder.svg')"
		>
			<img
				class="h-full w-full object-cover"
				src={`/portfolio/${index}-large.webp`}
				alt="An alt text"
				width="446"
				height="251"
			/>
		</a>
	{/each}
</div>

<style>
</style>
