/**
 *
 * @param {string} text
 */
export function getSlug(text) {
	return text.toLowerCase().replace(/[^a-z]/g, '-')
}
