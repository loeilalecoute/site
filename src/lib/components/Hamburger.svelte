<script>
	import { afterNavigate } from '$app/navigation'
	import { base } from '$app/paths'
	import { trapFocus } from '$lib/actions/trapFocus.js'
	import { slide } from 'svelte/transition'

	let isOpen = false

	/**@type {HTMLElement}*/
	let buttonEl

	let links = [
		{ text: 'Accueil', href: '/' },
		{ text: 'présentation', href: '/presentation' },
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

<nav class=" py-1 z-50 inline-flex fixed right-0 top-6" use:trapFocus on:keydown={handleKey}>
	<button
		class="bg-gray-900/90 ml-auto py-2 pr-3 pl-4 rounded-l-full text-gray-300 hover:text-white focus-visible:hover:text-white transition-colors z-10 text-xl sm:text-2xl border border-gray-300/10 border-r-0 shadow"
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
			class="fixed inset-0 bg-gray-900 text-3xl grid h-full place-content-center gap-4"
			transition:slide
		>
			{#each links as { href, text }, index}
				<li>
					<a
						href="{base}{href}"
						style="--_index:{index};"
						class="capitalize with-anim block hover:text-yellow focus-visible:text-yellow transition-colors"
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

	button path:nth-child(1) {
		translate: 0 -25%;
	}

	button path:nth-child(2) {
		opacity: 1;
	}

	button path:nth-child(3) {
		translate: 0 25%;
	}

	button path {
		transition: var(--duration) translate var(--duration), var(--duration) rotate 0s,
			0s opacity var(--duration);
	}

	.isOpen path:nth-child(1) {
		translate: 0 0;
		rotate: -45deg;
	}

	.isOpen path:nth-child(2) {
		opacity: 0;
	}

	.isOpen path:nth-child(3) {
		translate: 0 0;
		rotate: 45deg;
	}

	.isOpen path {
		transition: var(--duration) translate 0s, var(--duration) rotate var(--duration),
			0s opacity var(--duration);
	}

	.isOpen svg {
		rotate: 90deg;
		transition: rotate var(--duration);
	}

	.with-anim {
		animation: slide-in 300ms both;
		animation-timing-function: theme(transitionTimingFunction.ease-out-1);
		animation-delay: calc(var(--_index) * 100ms + 200ms);
	}
	@keyframes slide-in {
		from {
			transform: translate(0, 100%);
			clip-path: inset(0% 0% 100% 0%);
		}
		to {
			transform: translate(0, 0%);
			clip-path: inset(0% 0% 0% 0%);
		}
	}
</style>
