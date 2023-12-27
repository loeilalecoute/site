<script>
	import { base } from '$app/paths'
	import { intersectionObserver } from '$lib/actions/intersectionObserver.js'

	/**@type {string}*/
	export let href

	let visible = false
</script>

<li
	class=" inline-block text-lg sm:text-2xl/snug"
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
