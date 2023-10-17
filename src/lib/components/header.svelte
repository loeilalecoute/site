<script>
	import { afterNavigate } from '$app/navigation'
	import { slide } from 'svelte/transition'
	import { sineIn } from 'svelte/easing'
	import List from '$lib/components/list/index.svelte'
	let isOpen = false
	let hasBenClicked = false

	function handleClick() {
		isOpen = !isOpen
		hasBenClicked = true
	}

	afterNavigate(() => (isOpen = false))
</script>

<header class="fixed w-full text-right py-4 px-8 text-3xl z-50 top-0">
	<button on:click={handleClick} class="relative z-50">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="hamburger"
			version="1.1"
			viewBox="0 0 100 100"
			width="1em"
			height="1em"
			class:isOpen
			class:hasBenClicked
		>
			<path
				id="hamburger1"
				d="m7.5489 20-1.6984 4.8881h87.451l1.6984-4.8881z"
				class="fill-white stroke-white stroke-1"
			/>
			<path
				id="hamburger2"
				d="m6.6984 47.556-1.6984 4.8881h87.451l1.6984-4.8881z"
				class="fill-white stroke-white stroke-1"
			/>
			<path
				id="hamburger3"
				d="m6.6984 75.112-1.6984 4.8881h87.451l1.6984-4.8881z"
				class="fill-white stroke-white stroke-1"
			/>
		</svg>
	</button>
	{#if isOpen}
		<div
			class="bg-gray-950 fixed inset-0 overflow-hidden"
			in:slide={{ duration: 300, easing: sineIn }}
			out:slide={{ duration: 300, delay: 300, easing: sineIn }}
		>
			<List />
		</div>
	{/if}
</header>

<style lang="postcss">
	path {
		transition: transform 300ms theme(transitionTimingFunction.ease-3),
			opacity 200ms theme(transitionTimingFunction.ease-5);
		transform-origin: center;
	}
	path {
		transform: translateY(0);
	}
	.isOpen #hamburger1 {
		transform: rotate(45deg) translateY(29%);
	}
	.isOpen #hamburger2 {
		opacity: 0;
	}
	.isOpen #hamburger3 {
		transform: rotate(-45deg) translateY(-29%);
	}

	@keyframes open1 {
		to {
			transform: translateY(29%);
		}
	}
	@keyframes open3 {
		to {
			transform: translateY(-29%);
		}
	}
	@keyframes close1 {
		to {
			transform: translateY(0%);
		}
	}
	@keyframes close3 {
		to {
			transform: translateY(0%);
		}
	}
</style>
