<script>
	import { tweened } from 'svelte/motion'

	let currentCount = tweened(0)
	export let count = 0

	/**
	 * @param {number} number
	 * @param {number} divider
	 */
	function modulo(number, divider) {
		return ((number % divider) + divider) % divider
	}

	$: currentCount.set(count, { duration: Math.abs($currentCount - count) * 350 })
	$: offset = modulo($currentCount, 1)
</script>

<div class="relative inline-block -translate-y-1 overflow-hidden align-middle leading-[1]">
	<div style="transform: translate(0, {-offset * 100}%);" class=" text-center">
		<span>
			{Math.floor($currentCount)}
		</span>
		<span aria-hidden="true" class="absolute left-0 top-full w-full">
			{Math.floor($currentCount + 1)}
		</span>
	</div>
</div>
