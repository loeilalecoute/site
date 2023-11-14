<script>
	import { browser } from '$app/environment'
	import Title from '../Title.svelte'
	import Toc from '../Toc.svelte'

	/**@type{string}*/
	export let title
</script>

<svelte:head>
	<title>À propos</title>
</svelte:head>

<Title text={title} />
<div class="container mx-auto mt-12 flex flex-row-reverse justify-center">
	{#if browser}
		<aside class="ml-auto hidden max-w-[33ch] px-4 xl:block">
			<div class="sticky top-[20%]">
				<Toc />
			</div>
		</aside>
	{/if}

	<article class="prose prose-lg prose-invert col-start-2 w-full grow px-4 pb-40">
		<slot />
	</article>
</div>
