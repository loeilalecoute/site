<script>
	import { base } from '$app/paths'
	import { audioData, audioStore, isLoading, isPlaying } from '$lib/stores/currentAudio.js'
	import PlayIcon from './PlayIcon.svelte'
	/**@type {string}*/
	export let title
	/**@type {string}*/
	export let date
	/**@type {string|undefined}*/
	export let emission = undefined
	/**@type {string}*/
	export let src

	/**@type {'paused' | 'playing' | 'loading'}*/
	let state = 'paused'

	$: current = $audioData.src === src

	$: {
		if ($isLoading && current) state = 'loading'
		else if ($isPlaying && current) state = 'playing'
		else state = 'paused'
	}

	function handleClick() {
		if (!current) audioStore.loadAudio(src, title, date, emission)
		else if (state === 'playing') $audioStore?.pause()
		else if (state === 'paused') $audioStore?.play()
	}
</script>

<div class="flex gap-4 items-center">
	<p class="text-xl">
		<span>{title}</span> |
		{#if emission}
			<span>{emission}</span> |
		{/if}
		<span>{date}</span>
	</p>
	<button on:click={handleClick}><PlayIcon {state} /></button>
	<a href={base + src} download>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-8 h-8"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
			/>
		</svg>
	</a>
	{#if current}
		<span>En cours de lecture</span>
	{/if}
</div>
