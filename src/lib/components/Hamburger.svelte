<script>
	import { afterNavigate } from '$app/navigation'
	import { base } from '$app/paths'
	import { trapFocus } from '$lib/actions/trapFocus.js'
	import { slide } from 'svelte/transition'

	let isOpen = false

	/**@type {HTMLElement}*/
	let buttonEl

	let links = [
		{ text: 'accueil', href: '/' },
		{ text: 'à propos', href: '/apropos' },
		{ text: 'ressources', href: '/ressources' },
		{ text: 'portfolio', href: '/portfolio' },
		{ text: 'contact', href: '/contact' }
	]

	function open() {
		isOpen = true
		document.documentElement.style.setProperty('overflow', 'hidden')
	}

	function close() {
		isOpen = false
		document.documentElement.style.removeProperty('overflow')
	}

	function handleClick() {
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
		>
			<path class="hamburger1" d="M-10 0 h 20" />
			<path class="hamburger2" d="M-10 0 h 20" />
			<path class="hamburger3" d="M-10 0 h 20" />
		</svg>
	</button>
	{#if isOpen}
		<ul
			class="fixed inset-0 grid h-full place-content-center gap-4 bg-gray-900 text-3xl"
			transition:slide
		>
			{#each links as { href, text }, index}
				<li>
					<a
						href="{base}{href}"
						style="--_index:{index};"
						class="anim-from-bottom block capitalize transition-colors hover:text-yellow focus-visible:text-yellow"
						>{text}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</nav>

<style lang="postcss">
	button {
		--duration: 0.3s;
	}

	button .hamburger1 {
		translate: 0 -25%;
	}

	button .hamburger2 {
		opacity: 1;
	}

	button .hamburger3 {
		translate: 0 25%;
	}

	button path {
		transition:
			var(--duration) translate var(--duration),
			var(--duration) rotate 0s,
			0s opacity var(--duration);
	}

	.isOpen .hamburger1 {
		translate: 0 0;
		rotate: -45deg;
	}

	.isOpen .hamburger2 {
		opacity: 0;
	}

	.isOpen .hamburger3 {
		translate: 0 0;
		rotate: 45deg;
	}

	.isOpen path {
		transition:
			var(--duration) translate 0s,
			var(--duration) rotate var(--duration),
			0s opacity var(--duration);
	}

	.isOpen svg {
		rotate: 90deg;
		transition: rotate var(--duration);
	}
</style>
