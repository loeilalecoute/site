<script>
	import { larges, mini, placeHolders } from '$lib/_imagesData.json'
	import FooterSpace from '$lib/components/FooterSpace.svelte'
	import { audioStore } from '$lib/stores/currentAudio'
	import 'photoswipe/dist/photoswipe.css'
	// @ts-ignore
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	import { onMount } from 'svelte'

	let zoomFactor = 0.5

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

<div
	class="grid w-full gap-4 overflow-auto px-4 py-8 transition-all duration-300 sm:grid-cols-2 md:grid-cols-4"
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
{#if $audioStore}
	<FooterSpace />
{/if}
