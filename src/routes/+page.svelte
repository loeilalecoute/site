<script>
	import List from '$lib/components/list/index.svelte'
	import Splash from '$lib/components/splash.svelte'
</script>

<svelte:head>
	<title>Accueil</title>
</svelte:head>
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
