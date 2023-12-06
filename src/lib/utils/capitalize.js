/**
 * @param str {string}
 */
export function capitalize(str) {
	return str.replace(/\b\w/g, function (m) {
		return m.toUpperCase()
	})
}
