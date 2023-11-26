<script>
	import { base } from '$app/paths'

	/**@type {string}*/
	export let href
</script>

<li class=" text-lg font-semibold sm:text-2xl/snug">
	<a
		rel="internal"
		href={base + href}
		class="block transition-colors hover:text-yellow focus-visible:text-yellow"
		download><slot /></a
	>
</li>
