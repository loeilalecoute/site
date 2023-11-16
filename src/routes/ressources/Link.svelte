<script>
	import { base } from '$app/paths'

	/**@type {string}*/
	export let href
</script>

<li class="py-4 text-3xl/snug font-semibold">
	<a
		rel="internal"
		href={base + href}
		class="block transition-colors hover:text-yellow focus-visible:text-yellow"
		download><slot /></a
	>
</li>
