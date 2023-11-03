import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/lole' : ''
		}
	},
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: {
				_: 'src/lib/components/MarkdownLayouts/Base.svelte',
				text: 'src/lib/components/MarkdownLayouts/Text.svelte',
				projets: 'src/lib/components/MarkdownLayouts/ProjetLayout.svelte',
				about: 'src/lib/components/MarkdownLayouts/About.svelte'
			},
			remarkPlugins: [[remarkToc]],
			rehypePlugins: [rehypeSlug]
		}),
		vitePreprocess()
	]
}

export default config
