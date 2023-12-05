/**
 * @param {string} a
 * @param {string} b
 */
export const compareCitys = (a, b) => {
	const nameA = a.replace(/^(le |la |les |l')/gi, '')
	const nameB = b.replace(/^(le |la |les |l')/gi, '')
	return nameA.localeCompare(nameB)
}
