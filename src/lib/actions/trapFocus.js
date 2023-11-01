/**
 * @type {import('svelte/action').Action<HTMLElement>}
 */
export const trapFocus = (node) => {
	/**
	 * @param {KeyboardEvent} e
	 */
	function handleKeyboard(e) {
		const isNext = e.code === 'Tab' && !e.shiftKey
		const isPrevious = e.code === 'Tab' && e.shiftKey
		if (!isNext && !isPrevious) return

		/**@type {NodeListOf<HTMLElement>} */
		const focusable = node.querySelectorAll(
			'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]'
		)
		if (focusable.length <= 1) return
		const first = focusable[0]
		const last = focusable[focusable.length - 1]
		if (isNext && e.target === last) {
			e.preventDefault()
			first.focus()
		} else if (isPrevious && e.target === first) {
			e.preventDefault()
			last.focus()
		}
	}
	node.addEventListener('keydown', handleKeyboard)

	return {
		destroy() {
			node.removeEventListener('keydown', handleKeyboard)
		}
	}
}
