<script>
	import { audioStore, audioTime, isLoading, isPlaying } from '$lib/stores/currentAudio.js'
	import formatDuration from '$lib/utils/formatDuration.js'
	import PlayIcon from '../PlayIcon.svelte'

	/**@type {'loading' | 'playing' | 'paused'}*/
	$: audioState = $isLoading ? 'loading' : $isPlaying ? 'playing' : 'paused'

	$: now = $audioTime.duration ? ($audioTime.currentTime / $audioTime.duration) * 100 : 0
	$: disabled = $audioStore === undefined

	/**
	 * @param v {number}
	 */
	function setTime(v) {
		if (!$audioStore) return
		if (!$isPlaying)
			$audioStore.addEventListener(
				'play',
				() => {
					$audioStore?.pause()
				},
				{ once: true }
			)
		$audioStore.currentTime = v
	}

	/**
	 * @type {import('svelte/elements.js').FormEventHandler<HTMLInputElement>}
	 */
	function handleInput(e) {
		/**@type {HTMLInputElement}*/
		// @ts-ignore
		const target = e.target
		if (!$audioStore) return
		const value = (target.valueAsNumber / 100) * $audioTime.duration
		setTime(value)
	}

	function prev() {
		if (!$audioStore) return
		const value = $audioStore.currentTime - 10
		setTime(value)
	}

	function next() {
		if (!$audioStore) return
		const value = $audioStore.currentTime + 10
		setTime(value)
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

<div class=" justify-items-center gap-0 text-center sm:grid">
	<div>
		<div class=" gap-3 sm:flex">
			<button
				class="hidden p-1 text-lg transition-colors hover:text-yellow focus-visible:text-yellow disabled:text-gray-600 disabled:hover:text-gray-600 sm:block"
				{disabled}
				on:click={prev}
				aria-label="reculer dans l'audio"
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
						d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
					/>
				</svg>
			</button>
			<button
				class="p-1 text-2xl transition-colors hover:text-yellow focus-visible:text-yellow disabled:text-gray-600 disabled:hover:text-gray-600"
				{disabled}
				on:click={togglePlay}
				aria-label={$isPlaying ? 'pause' : 'lire'}
			>
				<PlayIcon state={audioState} />
			</button>

			<button
				class="hidden p-1 text-lg transition-colors hover:text-yellow focus-visible:text-yellow disabled:text-gray-600 disabled:hover:text-gray-600 sm:block"
				{disabled}
				on:click={next}
				aria-label="avancer dans l'audio"
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
						d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
					/>
				</svg>
			</button>
		</div>
	</div>
	<div class="whitespace-nowrap text-sm sm:hidden">
		<span class=" text-gray-300" aria-label="temps actuel"
			>{formatDuration($audioTime.currentTime)}</span
		>
		/ <span class=" text-gray-300" aria-label="durée">{formatDuration($audioTime.duration)}</span>
	</div>

	<div class=" hidden items-center gap-2 sm:flex">
		<span class=" text-gray-300" aria-label="temps actuel"
			>{formatDuration($audioTime.currentTime)}</span
		>
		<input
			id="small-range"
			type="range"
			min="0"
			max="100"
			step="0.1"
			value={now}
			class="h-2 w-60 cursor-pointer appearance-none rounded-lg md:w-80"
			style="--left:{now}%"
			on:input={handleInput}
			aria-label="timeline"
		/>
		<span class=" text-gray-300" aria-label="durée">{formatDuration($audioTime.duration)}</span>
	</div>
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
