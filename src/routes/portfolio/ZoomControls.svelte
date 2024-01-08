<script>
	/**@type {number}*/
	export let factor

	function handleZoom() {
		factor += 0.2
	}
	function handleUnzoom() {
		factor -= 0.2
	}
</script>

<div
	class="-translte-x-1/2 fixed left-1/2 top-9 z-30 hidden gap-1 rounded-full border border-gray-300/10 bg-gray-900/90 px-1 md:flex"
>
	<button
		class="group rounded-full p-2 text-3xl text-gray-200 hover:text-gray-50 focus-visible:text-gray-50 disabled:pointer-events-none disabled:opacity-25"
		aria-label="dézommer"
		on:click={handleUnzoom}
		disabled={factor <= 0}
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
		on:click={handleZoom}
		disabled={factor >= 1}
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
