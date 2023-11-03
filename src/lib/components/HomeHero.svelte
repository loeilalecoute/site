<script>
	import LogoLole from './LogoLole.svelte'
	/**@type {number}*/
	let scrollY
</script>

<svelte:window bind:scrollY />
<section
	class="container mx-auto grid min-h-screen items-center gap-10 px-4 py-12 sm:grid-cols-2 sm:justify-evenly sm:px-12 md:gap-32"
>
	<LogoLole />
	<p
		class=" my-auto mb-auto grid text-center text-2xl font-semibold uppercase leading-tight sm:text-left lg:text-3xl xl:text-4xl 2xl:text-5xl"
	>
		<span class="anim-from-bottom block" style="--_index:0">2005 2023</span>
		<span class="anim-from-bottom block" style="--_index:1">une mémoire</span>
		<span class="anim-from-bottom block" style="--_index:2">radiophonique</span>
		<span class="anim-from-bottom block" style="--_index:3">du 93</span>
	</p>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		class="fixed bottom-8 left-1/2 h-10 w-10 -translate-x-1/2 animate-bounce rounded-full border-current stroke-white p-2 transition-opacity"
		class:opacity-0={scrollY !== 0}
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
		/></svg
	>
</section>
