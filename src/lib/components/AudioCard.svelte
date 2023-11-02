<script>
	import { base } from '$app/paths'
	import {
		audioData,
		audioStore,
		isLoading,
		isPlaying,
		audioTime
	} from '$lib/stores/currentAudio.js'
	import formatDuration from '$lib/utils/formatDuration.js'
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

<div class="flex items-center gap-4">
	<p class="text-xl">
		<span>{title}</span> |
		{#if emission}
			<span>{emission}</span> |
		{/if}
		<span>{date}</span>
	</p>
	<button
		class="text-xl transition-colors hover:text-yellow focus-visible:text-yellow"
		on:click={handleClick}
		aria-label="écouter"><PlayIcon {state} /></button
	>
	<a
		class="text-xl transition-colors hover:text-yellow focus-visible:text-yellow"
		href={base + src}
		download
		aria-label="télécharger"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			width="1em"
			height="1em"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
			/>
		</svg>
	</a>
	{#if current}
		{#if state === 'loading'}
			<span>En chargement...</span>
		{:else}
			<span>{formatDuration($audioTime.currentTime)} / {formatDuration($audioTime.duration)}</span>
		{/if}
	{/if}
</div>
