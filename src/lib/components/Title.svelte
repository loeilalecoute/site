<script>
	import { onMount } from 'svelte'
	/**@type {string}*/
	export let text

	export let capitalize = false
	/**@type {HTMLElement}*/
	let wrapper
</script>

<div class="container mx-auto mt-20 px-4">
	<h1
		class="w-full text-4xl/none font-bold text-white sm:text-5xl/none md:text-7xl/none"
		class:capitalize
		bind:this={wrapper}
	>
		{text}
	</h1>
	<span class="mt-8 block h-[1px] bg-gray-50" aria-hidden="true" />
</div>
