/**
 * @type {import('svelte/action').Action<Element, {threshold?:number, once:boolean}|undefined , { 'on:screenEnter': (e: CustomEvent) => void,'on:screenExit': (e: CustomEvent) => void }>}
 */
export function intersectionObserver(node, params) {
	let onScreen = false
	const observer = new IntersectionObserver(
		(entries) => {
			const { isIntersecting } = entries[0]
			if (isIntersecting) {
				onScreen = true
				node.dispatchEvent(new CustomEvent('screenEnter', { detail: node }))
				if (params?.once) {
					observer.unobserve(node)
				}
			} else {
				if (onScreen) {
					node.dispatchEvent(new CustomEvent('screenExit'))
				}
			}
		},
		{
			threshold: params?.threshold ?? 0.5
		}
	)
	observer.observe(node)

	return {
		destroy() {
			observer.unobserve(node)
		}
	}
}
