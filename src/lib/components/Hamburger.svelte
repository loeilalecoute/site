<script>
	import { trapFocus } from '$lib/actions/trapFocus.js'
	import { slide } from 'svelte/transition'

	let open = false

	/**@type {HTMLElement}*/
	let buttonEl

	function handleClick() {
		open = !open
	}

	/**
	 *
	 * @param e {KeyboardEvent}
	 */
	function handleKey(e) {
		if (!open) return
		if (e.code === 'Escape') {
			open = false
		}
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<nav class="relative z-50 flex" use:trapFocus>
	<button
		class=" ml-auto p-1 text-gray-200 hover:text-white z-10"
		class:open
		on:click={handleClick}
		aria-expanded={open}
		aria-label="menu"
		bind:this={buttonEl}
		on:keydown={handleKey}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-12 h-12"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line class="hamburger1" x1="2" y1="6" x2="22" y2="6" />
			<line class="hamburger2" x1="2" y1="12" x2="22" y2="12" />
			<line class="hamburger3" x1="2" y1="18" x2="22" y2="18" />
		</svg>
	</button>
	{#if open}
		<ul
			class="fixed inset-0 bg-gray-900 text-3xl grid h-full place-content-center gap-4"
			transition:slide
		>
			<li>
				<a
					href=""
					style="--_index:0;"
					class="with-anim block hover:text-yellow focus-visible:text-yellow transition-colors"
					>Projets</a
				>
			</li>
			<li>
				<a
					href=""
					style="--_index:1;"
					class="with-anim block hover:text-yellow focus-visible:text-yellow transition-colors"
					>Ressources</a
				>
			</li>
			<li>
				<a
					href=""
					style="--_index:2;"
					class="with-anim block hover:text-yellow focus-visible:text-yellow transition-colors"
					>Présentation</a
				>
			</li>
			<li>
				<a
					href=""
					style="--_index:3;"
					class="with-anim block hover:text-yellow focus-visible:text-yellow transition-colors"
					>Contact</a
				>
			</li>
			<li>
				<a
					href=""
					style="--_index:4;"
					class="with-anim block hover:text-yellow focus-visible:text-yellow transition-colors"
					>Portfolio</a
				>
			</li>
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
	.open .hamburger1 {
		transform: rotate(45deg) translateY(25%);
	}
	.open .hamburger2 {
		opacity: 0;
	}
	.open .hamburger3 {
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
