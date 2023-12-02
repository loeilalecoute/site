<script>
	import { audioData, audioStore } from '$lib/stores/currentAudio.js'
	import { slide } from 'svelte/transition'
	import TimeControls from './TimeControls.svelte'
	import VolumeControl from './VolumeControl.svelte'
</script>

{#if $audioStore}
	<div
		class=" fixed bottom-0 z-40 flex w-full items-center justify-between gap-12 border-t border-gray-600/30 bg-gray-950/60 px-3 py-4 backdrop-blur-sm sm:grid sm:grid-cols-[1fr_auto_1fr] sm:px-6"
		transition:slide
	>
		<div class="group relative grid">
			<div
				class="pointer-events-none absolute bottom-[calc(100%_+_1.5rem)] translate-y-10 rounded-sm bg-gray-950 px-3 py-4 opacity-0 backdrop-blur-sm transition-all group-hover:pointer-events-auto group-hover:grid group-hover:translate-y-0 group-hover:opacity-100"
				aria-hidden="true"
			>
				<span class="whitespace-nowrap font-semibold text-blue sm:text-lg">{$audioData.title}</span>
				<span>
					{$audioData.city},
					{#if $audioData.infos}
						{$audioData.infos},
					{/if}
					{$audioData.date}</span
				>
			</div>
			<span
				class="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-blue sm:text-lg"
				>{$audioData.title}</span
			>
			<span>
				{$audioData.city}
				{#if $audioData.infos}
					, {$audioData.infos}
				{/if}
				{#if $audioData.date}
					, {$audioData.date}
				{/if}
			</span>
		</div>
		<TimeControls />
		<VolumeControl />
	</div>
{/if}
