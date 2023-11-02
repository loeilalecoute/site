<script>
	import { audioStore, audioTime, isPlaying } from '$lib/stores/currentAudio.js'
	import formatDuration from '$lib/utils/formatDuration.js'

	$: now = $audioTime.duration ? ($audioTime.currentTime / $audioTime.duration) * 100 : 0
	$: disabled = $audioStore === undefined

	/**
	 * @type {import('svelte/elements.js').FormEventHandler<HTMLInputElement>}
	 */
	function handleInput(e) {
		/**@type {HTMLInputElement}*/
		// @ts-ignore
		const target = e.target
		if (!$audioStore) return
		const value = (target.valueAsNumber / 100) * $audioTime.duration
		$audioStore.currentTime = value
	}

	function prev() {
		if (!$audioStore) return
		$audioStore.currentTime -= 10
	}
	function next() {
		if (!$audioStore) return
		$audioStore.currentTime += 10
	}
	function togglePlay() {
		if (!$audioStore) return
		if ($audioStore.paused) {
			$audioStore.play()
		} else {
			$audioStore.pause()
		}
	}
</script>

<div>
	<div class="flex gap-2">
		<button
			class="p-1 hover:text-yellow focus-visible:text-yellow transition-colors disabled:text-gray-600 disabled:hover:text-gray-600"
			{disabled}
			on:click={prev}
		>
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
					d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
				/>
			</svg>
		</button>
		<button
			class="p-1 hover:text-yellow focus-visible:text-yellow transition-colors disabled:text-gray-600 disabled:hover:text-gray-600"
			{disabled}
			on:click={togglePlay}
		>
			{#if !$isPlaying}
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
						d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
					/>
				</svg>
			{:else}
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
						d="M15.75 5.25v13.5m-7.5-13.5v13.5"
					/>
				</svg>
			{/if}
		</button>

		<button
			class="p-1 hover:text-yellow focus-visible:text-yellow transition-colors disabled:text-gray-600 disabled:hover:text-gray-600"
			{disabled}
			on:click={next}
		>
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
					d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
				/>
			</svg>
		</button>
	</div>
</div>

<div class=" flex items-center gap-2">
	<span class="text-xs text-gray-300" aria-label="temps actuel"
		>{formatDuration($audioTime.currentTime)}</span
	>
	<input
		id="small-range"
		type="range"
		min="0"
		max="100"
		value={now}
		class="w-60 h-1.5 rounded-lg appearance-none cursor-pointer"
		style="--left:{now}%"
		on:input={handleInput}
	/>
	<span class="text-xs text-gray-300" aria-label="durée">{formatDuration($audioTime.duration)}</span
	>
</div>

<style lang="postcss">
	[type='range'] {
		background: linear-gradient(
			to right,
			theme(colors.blue),
			theme(colors.blue) var(--left),
			theme(colors.gray.800) var(--left),
			theme(colors.gray.800)
		);
	}
	[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		width: 15px;
		height: 15px;
		border-radius: 100%;
		background: theme(colors.blue); /* Green background */
		border: 1px solid black;
		cursor: pointer; /* Cursor on hover */
	}

	[type='range']::-moz-range-thumb {
		width: 15px;
		height: 15px;
		border-radius: 100%;
		background: theme(colors.blue); /* Green background */
		border: 1px solid black;
		cursor: pointer; /* Cursor on hover */
	}
</style>
