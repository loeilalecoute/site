<script>
	import { intersectionObserver } from '$lib/actions/intersectionObserver.js'
	import Digit from './Digit.svelte'

	/**@type {number}*/
	export let number

	let visible = false

	let count = 0

	$: digits = count.toString().split('').map(Number)

	function onScreenEnter() {
		visible = true
		count = number
	}
	function onScreenExit() {
		visible = false
		count = 0
	}
</script>

<div
	class="mx-auto grid w-full max-w-xl content-center gap-2 rounded p-4 text-center text-xl font-bold uppercase transition-opacity duration-500 sm:text-2xl xl:h-64"
	use:intersectionObserver={{ once: true, threshold: 1 }}
	on:screenEnter={onScreenEnter}
	on:screenExit={onScreenExit}
	class:opacity-0={!visible}
>
	<span class="relative inline-block text-4xl font-bold text-yellow sm:text-5xl">
		<span class="text-transparent">
			{number}
		</span>
		<strong
			class="pointer-events-none absolute inset-0 inline-block whitespace-nowrap"
			aria-hidden="true"
		>
			{#each digits as n}
				<Digit count={n} />
			{/each}
		</strong>
	</span>
	<slot />
</div>
