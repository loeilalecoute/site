<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { citys as rawCitys } from '../93.json';
	import Map from './map.svelte';

	let current = '';

	const citys = rawCitys.filter((c) => c.project);

	let linksList: HTMLUListElement;

	const onPage = new Set<HTMLElement>();
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const { isIntersecting, target } of entries) {
					const element = target as HTMLElement;
					if (isIntersecting) onPage.add(element);
					else onPage.delete(element);
				}
			},
			{
				rootMargin: ' 100px 0px 100px'
			}
		);
		const items = linksList.querySelectorAll('li');
		for (const link of items) {
			observer.observe(link);
		}

		document.addEventListener('scroll', () => {
			let inCenter = '';
			let minDiff = Infinity;
			for (const el of onPage) {
				const { top, height } = el.getBoundingClientRect();
				const center = top + height / 2;
				const halfScreeen = window.innerHeight / 2;
				const diff = (halfScreeen - center) / halfScreeen;
				const absDiff = Math.abs(diff);

				el.style.setProperty('--diff', diff.toString());
				el.style.setProperty('--abs-diff', absDiff.toString());
				if (absDiff < minDiff) {
					minDiff = absDiff;
					inCenter = el.getAttribute('data-code') ?? '';
				}
			}

			if (minDiff < 100 && inCenter !== '') current = inCenter;
		});
	});
</script>

<div class="h-screen sticky top-0 -z-10 flex">
	<Map {current} />
</div>
<ul class="px-32 pt-16 space-y-24 pb-[100vh]" bind:this={linksList}>
	{#each citys as { name, code }}
		<li
			data-code={code}
			class="origin-left text-left text-6xl font-semibold text-gray-50 transition-colors"
			class:active={current === code}
		>
			<a href="{base}/projets{name}" class="block">
				{name}
			</a>
		</li>
	{/each}
</ul>

<style lang="postcss">
	li {
		opacity: calc(1 - var(--abs-diff) * 0.6);
		transform: scale(calc(0.4 + (1 - var(--abs-diff)) * 0.6));
	}
	li.active {
		color: theme(colors.blue);
		opacity: 1;
	}
</style>
