<script>
	import { afterNavigate } from '$app/navigation'
	import { trapFocus } from '$lib/actions/trapFocus.js'
	import { tweened } from 'svelte/motion'
	import Navigation from './Navigation.svelte'

	const lineTranslate = tweened(25)
	const lineRotate = tweened(0)
	let lineOpacity = 1
	let buttonOpacity = tweened(1, { duration: 100 })
	const svgRotate = tweened(0)

	let isOpen = false

	/**@type {HTMLElement}*/
	let buttonEl

	async function open() {
		isOpen = true
		document.documentElement.style.setProperty('overflow', 'hidden')

		buttonOpacity.set(0)
		await lineTranslate.set(0, { duration: 200 })
		svgRotate.set(90, { duration: 400 })
		lineOpacity = 0
		await lineRotate.set(45, { duration: 200 })
	}

	async function close() {
		isOpen = false
		document.documentElement.style.removeProperty('overflow')

		svgRotate.set(0, { duration: 0 })
		await lineRotate.set(0, { duration: 250 })
		lineOpacity = 1
		await lineTranslate.set(25, { duration: 200 })
		buttonOpacity.set(1)
	}

	async function handleClick() {
		if (isOpen) {
			close()
		} else {
			open()
		}
	}

	/**
	 *
	 * @param e {KeyboardEvent}
	 */
	function handleKey(e) {
		if (!isOpen) return
		if (e.code === 'Escape') {
			close()
		}
	}
	afterNavigate(() => close())
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<nav class=" fixed right-0 top-6 z-50 inline-flex py-1" use:trapFocus on:keydown={handleKey}>
	<button
		class="z-10 ml-auto rounded-l-full border border-r-0 border-gray-300/10 bg-gray-900/90 py-2 pl-4 pr-3 text-xl text-gray-300 shadow transition-colors hover:text-white focus-visible:hover:text-white sm:text-2xl"
		class:isOpen
		on:click={handleClick}
		aria-expanded={isOpen}
		aria-label="menu"
		bind:this={buttonEl}
	>
		<svg
			viewBox="-12 -12 24 24"
			width="1em"
			height="1em"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-width="1.2"
			style="
			--line-translate:{$lineTranslate};
			--line-rotate:{$lineRotate};
			--svg-rotate:{$svgRotate};
			--line-opacity:{lineOpacity};
			--button-opacity:{$buttonOpacity};
			"
		>
			<path class="hamburger1" d="M-10 0 h 20" />
			<path class="hamburger2" d="M-10 0 h 20" />
			<path class="hamburger3" d="M-10 0 h 20" />
			<circle cx="-3" cy="-6" r="2" class="fill-gray-900" />
			<circle cx="3" cy="0" r="2" class="fill-gray-900" />
			<circle cx="-3" cy="6" r="2" class="fill-gray-900" />
		</svg>
	</button>
	{#if isOpen}
		<Navigation />
	{/if}
</nav>

<style lang="postcss">
	button {
		--duration: 0.3s;
	}

	button .hamburger1 {
		transform: translate(0, calc(-1% * var(--line-translate)))
			rotate(calc(1deg * var(--line-rotate)));
	}

	button .hamburger2 {
		opacity: var(--line-opacity);
	}

	button .hamburger3 {
		transform: translate(0, calc(1% * var(--line-translate)))
			rotate(calc(-1deg * var(--line-rotate)));
	}
	button svg {
		transform: rotate(calc(1deg * var(--svg-rotate)));
	}

	button circle {
		transition: transform 0.3s theme(transitionTimingFunction.ease-in-1);
		opacity: var(--button-opacity);
	}

	button circle:nth-of-type(1) {
		--tx: 35%;
	}

	button circle:nth-of-type(2) {
		--tx: -30%;
	}

	button:hover circle {
		transform: translateX(var(--tx, 10%));
	}
</style>
