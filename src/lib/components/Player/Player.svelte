<script>
	import { audioData, audioStore } from '$lib/stores/currentAudio.js'
	import { slide } from 'svelte/transition'
	import TimeControls from './TimeControls.svelte'
	import VolumeControl from './VolumeControl.svelte'
</script>

{#if $audioStore}
	<div
		class="fixed bottom-0 z-40 flex w-full items-center justify-between gap-12 border-t border-gray-600/30 bg-gray-950/60 px-3 py-4 backdrop-blur-sm sm:grid sm:grid-cols-[1fr_auto_1fr] sm:px-6"
		transition:slide
	>
		<p class="grid">
			<span class="whitespace-nowrap font-semibold text-blue sm:text-lg">{$audioData.title}</span>
			<span>
				{$audioData.city},
				{#if $audioData.infos}
					{$audioData.infos},
				{/if}
				{$audioData.date}</span
			>
		</p>
		<TimeControls />
		<VolumeControl />
	</div>
{/if}
