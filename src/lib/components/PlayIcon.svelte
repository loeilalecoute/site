<script>
	/**@type {'paused' | 'playing' | 'loading'}*/
	export let state = 'paused'
</script>

{#if state === 'playing'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		width="1em"
		height="1em"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
	</svg>
{:else if state === 'paused'}
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
		class="animate-spin"
		width="1em"
		height="1em"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0" />
	</svg>
{/if}
