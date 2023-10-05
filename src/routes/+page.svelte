<script>
	import { base } from '$app/paths';
	import List from '$lib/components/list.svelte';
	import Map from '$lib/components/map.svelte';
	import Splash from '$lib/components/splash.svelte';
</script>

<svelte:head>
	<title>Accueil</title>
</svelte:head>
<div class="flex flex-col items-center h-screen">
	<div class="max-w-md w-full my-auto">
		<Splash />
	</div>

	<p class="mb-auto space-y-4 text-gray-50 text-justify">
		<span class="block text-5xl text-center font-semibold">2005-2023</span>
		<span class="block text-5xl font-semibold text-justify leading-relaxed"
			>une mémoire radiophonique <br /> de la SEINE-SAINT-DENIS</span
		>
	</p>
</div>
<List />
