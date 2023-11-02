<script>
	import { slide } from 'svelte/transition'
	import TimeControls from './TimeControls.svelte'
	import { audioData, audioStore, volume } from '$lib/stores/currentAudio.js'
	import VolumeControl from './VolumeControl.svelte'
</script>

{#if $audioStore}
	<div
		class="backdrop-blur-sm fixed bottom-0 w-full gap-12 flex justify-between sm:grid sm:grid-cols-[1fr_auto_1fr] border-t z-40 bg-gray-950/60 py-4 items-center px-3 sm:px-6 border-gray-600/30"
		transition:slide
	>
		<p class="grid">
			<span class="sm:text-lg text-blue font-semibold whitespace-nowrap">{$audioData.title}</span>
			<span>
				{#if $audioData.emission}
					{$audioData.emission},
				{/if}
				{$audioData.date}</span
			>
		</p>
		<TimeControls />
		<VolumeControl />
	</div>
{/if}
