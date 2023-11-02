<script>
	import { base } from '$app/paths'
	import { audioStore } from '$lib/stores/currentAudio.js'

	/**@type{string}*/
	export let title
	/**@type {string[]}*/
	export let audios
</script>

<article class="prose mx-auto mt-16 prose-invert">
	<ul>
		{#each audios as audio}
			<li><button on:click={() => audioStore.loadAudio(base + audio)}>{audio}</button></li>
		{/each}
	</ul>
	<h1>{title}</h1>
	<slot />
</article>
