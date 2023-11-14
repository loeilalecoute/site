<script>
	import { base } from '$app/paths'
	import { intersectionObserver } from '$lib/actions/intersectionObserver.js'

	/**@type {string}*/
	export let href = ''

	let visible = false
</script>

<li
	class="py-4 text-3xl/snug font-semibold"
	use:intersectionObserver
	on:screenEnter={() => {
		visible = true
	}}
>
	<a
		rel="internal"
		href={base + href}
		class="block transition-colors hover:text-yellow focus-visible:text-yellow"
		class:anim-from-bottom={visible}
		class:opacity-0={!visible}
		download><slot /></a
	>
</li>
