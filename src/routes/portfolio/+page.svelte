<script>
	import { larges, mini, placeHolders } from '$lib/_imagesData.json'
	import 'photoswipe/dist/photoswipe.css'
	// @ts-ignore
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	import { onMount } from 'svelte'

	let zoom = 1
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
	class="grid h-screen w-full snap-both snap-mandatory gap-8 overflow-auto px-8 py-[40vh] transition-all duration-300 md:grid-cols-[repeat(3,calc(896px_*_var(--zoom)))] md:p-32"
	id="gallery"
	style="--zoom:{zoom}"
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
<div
	class="-translte-x-1/2 fixed left-1/2 top-9 hidden gap-1 rounded-full border border-gray-300/10 bg-gray-900/90 px-1 sm:flex"
>
	<button
		class="group rounded-full p-2 text-3xl text-gray-200 hover:text-gray-50 focus-visible:text-gray-50 disabled:pointer-events-none disabled:opacity-25"
		aria-label="dézommer"
		on:click={() => (zoom = zoom * 0.9)}
		disabled={zoom < 0.5}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class=" h-6 w-6 transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6"
			/>
		</svg>
	</button>
	<button
		class="group rounded-full p-2 text-3xl text-gray-200 hover:text-gray-50 focus-visible:text-gray-50 disabled:pointer-events-none disabled:opacity-25"
		aria-label="zoomer"
		on:click={() => (zoom = zoom * 1.2)}
		disabled={zoom > 1.4}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class=" h-6 w-6 transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
			/>
		</svg>
	</button>
</div>

<style>
</style>
