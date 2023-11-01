<script>
	import { afterNavigate } from '$app/navigation'
	import { base } from '$app/paths'
	import { trapFocus } from '$lib/actions/trapFocus.js'
	import { slide } from 'svelte/transition'

	let isOpen = false

	/**@type {HTMLElement}*/
	let buttonEl

	let links = [
		{ text: 'projets', href: '/#projets' },
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

<nav class="px-4 py-1 z-50 inline-flex fixed right-0 top-0" use:trapFocus on:keydown={handleKey}>
	<button
		class=" ml-auto p-1 text-gray-400 hover:text-white focus-visible:hover:text-white transition-colors z-10 text-2xl sm:text-3xl"
		class:isOpen
		on:click={handleClick}
		aria-expanded={isOpen}
		aria-label="menu"
		bind:this={buttonEl}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			width="1em"
			height="1em"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line class="hamburger1" x1="2" y1="6" x2="22" y2="6" />
			<line class="hamburger2" x1="2" y1="12" x2="22" y2="12" />
			<line class="hamburger3" x1="2" y1="18" x2="22" y2="18" />
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
	line {
		transform-origin: center;
	}
	line {
		transition: transform 0.3s, opacity 0.2s;
	}
	.isOpen .hamburger1 {
		transform: rotate(45deg) translateY(25%);
	}
	.isOpen .hamburger2 {
		opacity: 0;
	}
	.isOpen .hamburger3 {
		transform: rotate(-45deg) translateY(-25%);
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
