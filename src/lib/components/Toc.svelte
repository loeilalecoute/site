<script>
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'

	/**@type {{id:string,text:string,childs?:{id:string,text:string}[]}[]}*/
	let headings = []

	/**@type {string|undefined}*/
	let current = undefined

	let currentLinkTop = 0

	$: {
		if (browser) {
			/**@type {HTMLElement|null}*/
			const linkEl = document?.querySelector(`[href="#${current}"]`)
			currentLinkTop = linkEl?.offsetTop ?? 0
		}
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entrie) => {
					if (entrie.isIntersecting) current = entrie.target.id
				})
			},
			{ rootMargin: '-20% 0% -50% 0%' }
		)

		/**@type {NodeListOf<HTMLElement>}*/
		const headingsEl = document.querySelectorAll('h2[id],h3[id]')

		for (const h of headingsEl) {
			observer.observe(h)

			const current = { id: h.id, text: h.textContent ?? '' }
			if (h.tagName === 'H2') headings.push(current)
			else if (h.tagName === 'H3') {
				if (headings.length > 0) {
					headings[headings.length - 1].childs = [
						...(headings[headings.length - 1].childs ?? []),
						current
					]
				}
			}
		}
		return () => {
			for (const h of headingsEl) {
				observer.unobserve(h)
			}
		}
	})
</script>

<svelte:head>
	<style>
		html {
			scroll-padding-top: 20%;
		}
	</style>
</svelte:head>

<nav class="max-w-xs">
	<h2 class="border-gray-500 pb-3 uppercase">Sommaire</h2>
	<div class="relative border-l border-gray-500 pl-4">
		<span
			aria-hidden
			class="absolute left-0 h-[1.2em] w-[2px] -translate-x-1/2 rounded bg-blue transition-all"
			style="top:{currentLinkTop}px"
		/>
		<ul class=" space-y-2 text-sm text-gray-400">
			{#each headings as { id, text, childs }}
				<li>
					<a href="#{id}" class="line-clamp-1" class:text-white={current === id}>{text}</a>
					{#if childs && childs.length > 0}
						<ul class="space-y-2 px-2 pt-2">
							{#each childs as { id, text }}
								<li class="text-xs">
									<a href="#{id}" class="line-clamp-1" class:text-white={current === id}>{text}</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</nav>
