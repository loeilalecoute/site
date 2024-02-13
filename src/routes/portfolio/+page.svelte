<script>
	import { larges, mini, placeHolders } from '$lib/_imagesData.json'
	import legends from '$lib/imgLegends.json'
	import FooterSpace from '$lib/components/FooterSpace.svelte'
	import { audioStore } from '$lib/stores/currentAudio'
	import 'photoswipe/dist/photoswipe.css'
	// @ts-ignore
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	import { onMount } from 'svelte'

	let zoomFactor = 0.5

	function initLightBox() {
		const lightbox = new PhotoSwipeLightbox({
			gallery: '#gallery',
			children: 'a',
			// showHideAnimationType: 'fade',
			pswpModule: () => import('photoswipe')
		})

		lightbox.on('uiRegister', function () {
			lightbox.pswp.ui.registerElement({
				name: 'custom-caption',
				order: 9,
				isButton: false,
				appendTo: 'root',
				html: 'Caption text',
				/** @param {HTMLElement} el*/
				onInit: (el) => {
					lightbox.pswp.on('change', () => {
						const currSlideElement = lightbox.pswp.currSlide.data.element
						let captionHTML = ''
						if (currSlideElement) {
							const hiddenCaption = currSlideElement.querySelector('[data-hidden-caption]')
							if (hiddenCaption) {
								// get caption from element with class hidden-caption-content
								captionHTML = hiddenCaption.innerHTML
							} else {
								// get caption from alt attribute
								captionHTML = currSlideElement.querySelector('img').getAttribute('alt')
							}
						}
						el.innerHTML = captionHTML || ''
						el.classList.add(
							'absolute',
							'left-1/2',
							'border-gray-600/30',
							'bg-gray-950/60',
							'px-1',
							'py-2',
							'backdrop-blur-sm',
							'bottom-8',
							'-translate-x-1/2',
							'text-gray-50',
							'text-lg'
						)
					})
				}
			})
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
					class="h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
					src="/portfolio/{hash}.jpg"
					alt={legends[index] ?? ''}
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
