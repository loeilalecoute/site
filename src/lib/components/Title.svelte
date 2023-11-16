<script>
	/**@type {string}*/
	export let text

	export let capitalize = false
</script>

<div class="container mx-auto mt-20 px-4">
	<h1 class="text-4xl/none font-bold text-white sm:text-5xl/none md:text-7xl/none" class:capitalize>
		{text}
	</h1>
	<span class="mt-8 block h-[1px] max-w-screen-xl bg-gray-50" aria-hidden="true" />
</div>
