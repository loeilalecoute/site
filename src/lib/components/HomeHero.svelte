<script>
	import LogoLole from './LogoLole.svelte'
	/**@type {number}*/
	let scrollY
</script>

<svelte:window bind:scrollY />
<section
	class="container mx-auto grid min-h-screen content-center items-center gap-4 px-4 sm:grid-cols-2 sm:content-center sm:justify-evenly sm:gap-10 sm:px-12 sm:py-12 md:gap-32"
>
	<LogoLole />
	<p
		class=" my-auto mb-auto grid text-center text-2xl font-semibold uppercase leading-tight sm:text-left lg:text-3xl xl:text-4xl 2xl:text-5xl"
	>
		<span class="anim-from-bottom block" style="--_index:0">2005-2023</span>
		<span class="anim-from-bottom block" style="--_index:1">une mémoire</span>
		<span class="anim-from-bottom block" style="--_index:2">radiophonique</span>
		<span class="anim-from-bottom block" style="--_index:3">du 93</span>
	</p>
	<a
		href="#navigation"
		class="fixed bottom-2 left-1/2 h-10 w-10 -translate-x-1/2 rotate-180 p-2 text-4xl sm:bottom-8"
	>
		<!-- <svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			class=" -translate-x-1/2 animate-bounce stroke-white transition-opacity"
			class:opacity-0={scrollY >= 10}
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
			/></svg
		> -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 96 100"
			enable-background="new 0 0 96 96"
			xml:space="preserve"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			width="1em"
			class=" -translate-x-1/2 animate-bounce stroke-yellow transition-opacity"
			class:opacity-0={scrollY >= 10}
			><g
				><rect x="46.125" y="48" width="3.75" height="3.906" /><rect
					x="46.125"
					y="52.594"
					width="3.75"
					height="4.656"
				/><path
					d="M48,8c-9.705,0-17.601,7.895-17.601,17.6c0,5.449,2.518,10.512,6.777,13.837h21.646c4.259-3.325,6.779-8.39,6.779-13.837   C65.602,15.895,57.705,8,48,8z"
				/><path
					d="M42.639,88h10.724l4.695-47.993H37.941L42.639,88z M56.064,40.449L51.646,86.07h-7.293l-4.416-45.62l10.333-0.001H56.064z"
				/></g
			></svg
		>
	</a>
</section>
