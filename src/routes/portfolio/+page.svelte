<script>
	// @ts-ignore
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	import 'photoswipe/dist/photoswipe.css'
	import { onMount } from 'svelte'
	// onMount(() => {
	// 	let lightbox = new PhotoSwipeLightbox({
	// 		gallery: '#gallery',
	// 		children: 'a',
	// 		pswpModule: () => import('photoswipe')
	// 	})
	// 	lightbox.init()
	// })
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<div
	class="grid h-screen w-full snap-both snap-mandatory grid-cols-[repeat(4,50vw)] gap-4 overflow-auto p-8 pb-40"
	id="gallery"
>
	<div class="aspect-video h-auto w-full snap-center" data-pswp-width={1000} data-pswp-height={666}>
		<img class="h-full w-full object-cover" src="/images/0.jpeg" alt="An alt text" />
	</div>
	<div class="aspect-video h-auto w-full snap-center" data-pswp-width={1000} data-pswp-height={666}>
		<img class="h-full w-full object-cover" src="/images/1.jpeg" alt="An alt text" />
	</div>
	<div class="aspect-video h-auto w-full snap-center" data-pswp-width={1000} data-pswp-height={666}>
		<img class="h-full w-full object-cover" src="/images/2.jpeg" alt="An alt text" />
	</div>
	<div class="aspect-video h-auto w-full snap-center" data-pswp-width={1000} data-pswp-height={666}>
		<img class="h-full w-full object-cover" src="/images/3.jpeg" alt="An alt text" />
	</div>
	<div class="aspect-video h-auto w-full snap-center" data-pswp-width={1000} data-pswp-height={666}>
		<img class="h-full w-full object-cover" src="/images/4.jpeg" alt="An alt text" />
	</div>
	<div class="aspect-video h-auto w-full snap-center" data-pswp-width={1000} data-pswp-height={666}>
		<img class="h-full w-full object-cover" src="/images/5.jpeg" alt="An alt text" />
	</div>
	<div class="aspect-video h-auto w-full snap-center" data-pswp-width={1000} data-pswp-height={666}>
		<img class="h-full w-full object-cover" src="/images/6.jpeg" alt="An alt text" />
	</div>
	<div class="aspect-video h-auto w-full snap-center" data-pswp-width={1000} data-pswp-height={666}>
		<img class="h-full w-full object-cover" src="/images/7.jpeg" alt="An alt text" />
	</div>
	<div class="aspect-video h-auto w-full snap-center" data-pswp-width={1000} data-pswp-height={666}>
		<img class="h-full w-full object-cover" src="/images/8.jpeg" alt="An alt text" />
	</div>
	<div class="aspect-video h-auto w-full snap-center" data-pswp-width={1000} data-pswp-height={666}>
		<img class="h-full w-full object-cover" src="/images/9.jpeg" alt="An alt text" />
	</div>
</div>

<style>
</style>
