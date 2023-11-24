<script>
	/**
	 * code of the selected city
	 * @type {string|undefined}
	 */
	export let selected

	/**@type {string}*/
	export let code

	/**@type {string}*/
	export let name

	/**@type {string}*/
	export let href

	/**@type {number}*/
	let scrollY
	/**@type {number}*/
	let screenHeight
	/**@type {number}*/
	let height
	/**@type {HTMLElement}*/
	let element

	/**
	 * @param n{number}
	 */
	function round(n) {
		return Math.round(n * 100) / 100
	}

	$: distanceFromCenter =
		element && Math.abs(element.offsetTop + height * 0.5 - scrollY - screenHeight * 0.5)

	$: factor = distanceFromCenter ? 1 - round(distanceFromCenter / (screenHeight * 0.5)) : 1

	/**
	 * @param code {string}
	 */
	function select() {
		selected = code
	}

	/**
	 * @param code {string}
	 */
	function unSselect() {
		if (selected === code) selected = undefined
	}
</script>

<svelte:window bind:scrollY bind:innerHeight={screenHeight} />

<li>
	<a
		{href}
		class="item inline-block origin-left text-2xl hover:text-yellow hover:opacity-100 focus-visible:text-yellow focus-visible:opacity-100 sm:text-3xl md:text-4xl lg:text-5xl"
		on:mouseenter={() => select()}
		on:focus={() => select()}
		on:blur={() => unSselect()}
		on:mouseleave={() => unSselect()}
		bind:clientHeight={height}
		bind:this={element}
		style="--factor:{factor}"
		>{name}
	</a>
</li>

<style lang="postcss">
	a {
		opacity: calc(0.2 + 0.8 * var(--factor, 1));
		transform: scale(calc(0.6 + 0.4 * var(--factor, 1)));
	}
</style>
