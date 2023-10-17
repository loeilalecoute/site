<script>
	/**@type{string}*/
	export let code

	/**@type{string}*/
	export let name

	/**@type {string}*/
	export let selected

	/**@type {HTMLElement}*/
	let element

	/**@type {number}*/
	let height

	/**@type {number}*/
	let innerHeight

	function select() {
		selected = code
	}

	function unSelect() {
		if (selected === code) selected = ''
	}
</script>

<svelte:window bind:innerHeight />

<li
	data-code={code}
	class="origin-left text-left text-xl sm:text-4xl md:text-6xl font-semibold text-gray-50 transition-colors"
	class:active={selected === code}
	data-current={selected}
	bind:this={element}
	bind:clientHeight={height}
	style="--top:{element?.offsetTop};--height:{height}; --half:{innerHeight * 0.5}"
>
	<a
		href="/projets/aubervilliers"
		class="inline-block hover:text-yellow hover:opacity-100"
		on:mouseenter={select}
		on:mouseleave={unSelect}
		on:focus={select}
		on:blur={unSelect}
	>
		{name}
	</a>
</li>

<style lang="postcss">
	li {
		--center: calc(var(--top) + var(--height) * 0.5 - var(--scrolly));
		--diff: calc((var(--half) - var(--center)) / var(--half));
		--abs-diff: max(var(--diff), -1 * var(--diff));
		transform: scale(calc(0.1 + (1 - var(--abs-diff)) * 0.9));
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
