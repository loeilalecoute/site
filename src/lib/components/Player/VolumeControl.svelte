<script>
	import { volume, audioStore } from '$lib/stores/currentAudio.js'

	/**
	 * @type {import('svelte/elements.js').FormEventHandler<HTMLInputElement>}
	 */
	function handleInput(e) {
		/**@type {HTMLInputElement}*/
		// @ts-ignore
		const target = e.target
		if (!$audioStore) return
		const value = target.valueAsNumber
		$audioStore.volume = value
	}

	function handleClick() {
		if (!$audioStore) return
		if ($audioStore?.volume === 0) $audioStore.volume = $volume.last
		else $audioStore.volume = 0
	}
</script>

<div class="hidden items-center justify-end gap-1 md:flex">
	<button
		on:click={handleClick}
		class="text-lg transition-colors hover:text-yellow focus-visible:text-yellow"
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
			{#if $audioStore?.volume === 0}
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
				/>
			{:else if $audioStore && $audioStore?.volume < 0.5}
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
				/>
			{:else}
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
				/>
			{/if}
		</svg>
	</button>
	<input
		id="small-range"
		type="range"
		min="0"
		max="1"
		step="0.1"
		value={$volume.current}
		class="w-30 hidden h-1 cursor-pointer appearance-none rounded-lg lg:block"
		style="--left:{$volume.current * 100}%"
		aria-label="timeline"
		on:input={handleInput}
	/>
</div>

<style lang="postcss">
	[type='range'] {
		background: linear-gradient(
			to right,
			theme(colors.gray.200),
			theme(colors.gray.200) var(--left),
			theme(colors.gray.800) var(--left),
			theme(colors.gray.800)
		);
	}
	[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		width: 12px;
		height: 12px;
		border-radius: 100%;
		background: theme(colors.gray.200); /* Green background */
		border: 1px solid black;
		cursor: pointer; /* Cursor on hover */
	}

	[type='range']::-moz-range-thumb {
		width: 12px;
		height: 12px;
		border-radius: 100%;
		background: theme(colors.gray.200); /* Green background */
		border: 1px solid black;
		cursor: pointer; /* Cursor on hover */
	}
</style>
