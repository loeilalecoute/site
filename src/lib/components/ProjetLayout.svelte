<script>
	import AudioCard from './AudioCard.svelte'

	/**@type{string}*/
	export let title
	/**@type {{src:string,title:string, emission?:string, date:string}[]}*/
	export let audios
</script>

<div class="container mx-auto">
	<ul>
		{#each audios as audio}
			<li>
				<AudioCard {...audio} />
			</li>
		{/each}
	</ul>
</div>

<article class="prose prose-invert mx-auto mt-16">
	<h1>{title}</h1>
	<slot />
</article>
