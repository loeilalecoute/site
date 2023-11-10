/**
 * @param points {number[][]}
 * @param width {number}
 * @param height {number}
 */
export function getPathFromPoints(points, width, height) {
	return `M${points.map(([x, y]) => `${(x / width) * 500}, ${(y / height) * 500}`).join('L ')} Z`
}
