<script>
	import { browser } from '$app/environment'
	import Toc from '../Toc.svelte'

	/**@type{string}*/
	export let title
</script>

<svelte:head>
	<title>À propos</title>
</svelte:head>

<div class="container mx-auto mt-8 px-4">
	<h1 class="text-6xl/relaxed font-bold text-white sm:text-7xl/relaxed">{title}</h1>
	<span class="block h-[1px] max-w-screen-xl bg-gray-50" aria-hidden="true" />
</div>
<div class="container mx-auto mt-12 flex flex-row-reverse justify-center">
	{#if browser}
		<aside class="ml-auto hidden max-w-[33ch] px-4 xl:block">
			<div class="sticky top-[20%]">
				<Toc />
			</div>
		</aside>
	{/if}

	<article class="prose-m prose prose-lg prose-invert col-start-2 w-full grow px-4 pb-80">
		<slot />
	</article>
</div>
