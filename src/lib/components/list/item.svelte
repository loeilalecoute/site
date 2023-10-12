<script>
	/**@type{string}*/
	export let code
	/**@type{string}*/
	export let current
	/**@type{string}*/
	export let name

	/**@type {HTMLElement}*/
	let element

	/**@type {number}*/
	let height

	/**@type {number}*/
	let innerHeight

	let rect
</script>

<svelte:window bind:innerHeight />

<li
	data-code={code}
	class="origin-left text-left text-xl sm:text-4xl md:text-6xl font-semibold text-gray-50 transition-colors"
	class:active={current === code}
	data-current={current}
	bind:this={element}
	bind:clientHeight={height}
	style="--top:{element?.offsetTop};--height:{height}; --half:{innerHeight * 0.5}"
>
	<a href="#" class="inline-block hover:text-yellow hover:opacity-100">
		{name}
	</a>
</li>

<style lang="postcss">
	li {
		--center: calc(var(--top) + var(--height) * 0.5 - var(--scrolly));
		--diff: calc((var(--half) - var(--center)) / var(--half));
		--abs-diff: max(var(--diff), -1 * var(--diff));
		transform: scale(calc(0.4 + (1 - var(--abs-diff)) * 0.6));
		will-change: transform;
	}
	li a {
		opacity: calc(1 - var(--abs-diff) * 0.6);
	}
	li.active {
		color: theme(colors.yellow);
	}

	li.active a {
		opacity: 1;
	}
	li a:hover {
		opacity: 1;
	}
</style>
