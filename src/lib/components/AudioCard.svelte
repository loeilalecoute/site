<script>
	import { base } from '$app/paths'
	import {
		audioData,
		audioStore,
		audioTime,
		isLoading,
		isPlaying
	} from '$lib/stores/currentAudio.js'
	import formatDuration from '$lib/utils/formatDuration.js'
	import PlayIcon from './PlayIcon.svelte'
	/**@type {string}*/
	export let title
	/**@type {string}*/
	export let city
	/**@type {string}*/
	export let date
	/**@type {string|undefined}*/
	export let infos = undefined
	/**@type {string|undefined}*/
	export let description = undefined
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
		if (!current) audioStore.loadAudio(src, title, date, city, infos)
		else if (state === 'playing') $audioStore?.pause()
		else if (state === 'paused') $audioStore?.play()
	}
</script>

<div class="grid items-center">
	<h3 class="text-lg text-blue">{title}</h3>
	<p class="">
		{#if infos}
			<span>{infos}</span>,
		{/if}
		{#if date}
			<span>{date}</span>
		{/if}
	</p>
	{#if description}
		<p class="prose prose-invert">
			{description}
		</p>
	{/if}
	<div class="mt-4 flex items-center gap-4">
		<a
			class="text-xl transition-transform duration-300 ease-ease-out-1 hover:-translate-y-1 focus-visible:-translate-y-1"
			href={base + src}
			download
			title="télécharger"
			data-sveltekit-preload-data
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
		<button
			class="grid rounded-full bg-gray-50 p-1.5 text-lg text-gray-950 transition-transform duration-300 ease-ease-out-1 hover:-translate-y-1 focus-visible:-translate-y-1"
			on:click={handleClick}
			aria-label="écouter"><PlayIcon {state} /></button
		>
		{#if current}
			<span class="ml-4 text-gray-50/80">
				{#if state === 'loading'}
					En chargement...
				{:else}
					{formatDuration($audioTime.currentTime)} / {formatDuration($audioTime.duration)}
				{/if}
			</span>
		{/if}
	</div>
</div>
