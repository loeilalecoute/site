<script>
	import { slide } from 'svelte/transition'
	import TimeControls from './TimeControls.svelte'
	import { audioData, audioStore } from '$lib/stores/currentAudio.js'
</script>

{#if $audioStore}
	<div
		class="fixed bottom-0 w-full flex border-t justify-center z-40 bg-gray-950 py-4 items-center px-6"
		transition:slide
	>
		<div>
			<p>
				<span>{$audioData.title}</span> |
				{#if $audioData.emission}
					<span>{$audioData.emission}</span> |
				{/if}
				<span>{$audioData.date}</span>
			</p>
		</div>
		<div class="mx-auto grid justify-items-center gap-2">
			<TimeControls />
		</div>
	</div>
{/if}
