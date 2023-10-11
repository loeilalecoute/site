<script>
	import Map from '../map.svelte'

	/**@type{string}*/
	export let code
	/**@type{string}*/
	export let current
	/**@type{string}*/
	export let name

	/**@type {HTMLElement}*/
	let element

	/**@type {number}*/
	let center
	/**@type {number}*/
	let height
	/**@type {number}*/
	let diff

	/**@type {number}*/
	let scrollY
	/**@type {number}*/
	let innerHeight

	$: {
		center = element?.offsetTop + height * 0.5 - scrollY
		const halfScreeen = innerHeight * 0.5
		diff = (halfScreeen - center) / halfScreeen
	}

	$: {
	}
	// document.addEventListener('scroll', () => {
	// 	for (const el of items) {
	// 		const { top, height } = el.getBoundingClientRect()
	// 		const center = top + height / 2
	// 		const halfScreeen = window.innerHeight / 2
	// 		const diff = (halfScreeen - center) / halfScreeen
	// 		const absDiff = Math.abs(diff)

	// 		el.style.setProperty('--diff', diff.toString())
	// 		el.style.setProperty('--abs-diff', absDiff.toString())
	// 	}
	// })
</script>

<svelte:window bind:scrollY bind:innerHeight />

<li
	data-code={code}
	class="origin-left text-left text-xl sm:text-4xl md:text-6xl font-semibold text-gray-50 transition-colors"
	class:active={current === code}
	data-current={current}
	bind:this={element}
	bind:clientHeight={height}
	style="--diff:{diff};--abs-diff:{Math.abs(diff)}"
>
	<a href="#" class="block">
		{name}
	</a>
</li>

<style lang="postcss">
	li {
		opacity: calc(1 - var(--abs-diff) * 0.6);
		transform: scale(calc(0.4 + (1 - var(--abs-diff)) * 0.6));
	}
	li.active {
		color: theme(colors.yellow);
		opacity: 1;
	}
</style>
