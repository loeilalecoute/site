<script>
	import AudioCard from './AudioCard.svelte'

	/**@type{string}*/
	export let title
	/**@type {{src:string,title:string, infos?:string,description?: string, date:string}[]}*/
	export let audios
</script>

<div class="container mx-auto">
	<ul class=" divide-y p-12">
		{#each audios as audio}
			<li class="py-4">
				<AudioCard {...audio} />
			</li>
		{/each}
	</ul>
</div>

<article class="prose prose-invert mx-auto mt-16">
	<h1>{title}</h1>
	<slot />
</article>
