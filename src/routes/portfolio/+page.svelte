<script>
	import { larges, mini, placeHolders } from '$lib/_imagesData.json'
	import 'photoswipe/dist/photoswipe.css'
	// @ts-ignore
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	import { onMount } from 'svelte'
	import ZoomControls from './ZoomControls.svelte'

	let zoomFactor = 0.5

	$: zoom = zoomFactor === 1 ? 1 : 1 - Math.pow(2, -10 * zoomFactor)

	function initLightBox() {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#gallery',
			children: 'a',
			// showHideAnimationType: 'fade',
			pswpModule: () => import('photoswipe')
		})
		lightbox.init()
	}

	onMount(() => {
		initLightBox()
	})
</script>

<svelte:head>
	<title>Portfolio • L'œil à l'écoute</title>
	{#each placeHolders as { hash }}
		<link rel="preload" as="image" href="/portfolio/{hash}.png" />
	{/each}
</svelte:head>

<ZoomControls bind:factor={zoomFactor} />
<div
	class="grid h-screen w-full snap-both snap-mandatory gap-12 overflow-auto px-8 py-[40vh] transition-all duration-300 md:grid-cols-[repeat(3,calc(30vw_*_var(--zoom)_+_50vw))] md:p-32 lg:gap-8"
	id="gallery"
	style="--zoom:{zoomFactor}"
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
					class="h-full w-full object-cover opacity-0 transition-opacity delay-100 duration-700 group-hover:opacity-100"
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
