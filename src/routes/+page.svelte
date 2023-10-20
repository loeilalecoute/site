<script>
	import List from '$lib/components/list/index.svelte'
	import Splash from '$lib/components/splash.svelte'
	/**@type {number}*/
	let scrollY
</script>

<svelte:head>
	<title>Accueil</title>
</svelte:head>

<svelte:window bind:scrollY />

<div class="container mx-auto px-8">
	<div
		class="grid sm:grid-cols-2 gap-10 md:gap-12 content-center min-h-screen justify items-center"
	>
		<div class="w-full max-w-xs my-auto mx-auto sm:max-w-none">
			<Splash />
		</div>
		<p
			class=" my-auto grid mb-auto leading-tight text-center sm:text-left text-gray-50 text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold uppercase"
		>
			<span class="block with-anim" style="--_index:0">2005 2023</span>
			<span class="block with-anim" style="--_index:1">une mémoire</span>
			<span class="block with-anim" style="--_index:2">radiophonique</span>
			<span class="block with-anim" style="--_index:3">du 93</span>
		</p>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			class="h-10 w-10 animate-bounce rounded-full border-current p-2 stroke-white fixed bottom-8 left-1/2 -translate-x-1/2 transition-opacity"
			class:opacity-0={scrollY !== 0}
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
			/></svg
		>
	</div>
	<List />
</div>

<style lang="postcss">
	.with-anim {
		animation: slide-in 300ms both;
		animation-timing-function: theme(transitionTimingFunction.ease-out-1);
		animation-delay: calc(var(--_index) * 50ms + 600ms);
	}
	@keyframes slide-in {
		from {
			transform: translate(0, 100%);
			clip-path: inset(0% 0% 100% 0%);
		}
		to {
			transform: translate(0, 0%);
			clip-path: inset(0% 0% 0% 0%);
		}
	}
</style>
