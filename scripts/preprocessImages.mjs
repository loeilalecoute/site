import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'
import potrace from 'potrace'
const inputDir = 'rawImages'
const outputDir = 'static/portfolio'

const imagesFormat = [
	{ name: 'mini', width: 446, height: 251, fit: 'cover' },
	{ name: 'large', width: 1200, height: 1200, fit: 'inside' }
]

/**
 * @param {string} dir
 */
async function clearDir(dir) {
	const pathes = fs.readdirSync(dir)
	pathes.forEach(async (p) => {
		fs.unlinkSync(path.join(dir, p))
	})
}

/**
 * @param {string} input
 * @param {string} output
 */
async function createImages(input, output) {
	const pathes = fs.readdirSync(input)
	let i = 0
	for await (const p of pathes) {
		const filePath = path.join(input, p)
		for await (const { name, width, height, fit } of imagesFormat) {
			await sharp(filePath)
				.resize({ width, height, fit })
				.toFormat('webp')
				.toFile(path.join(output, `${i}-${name}.webp`))
			await sharp(filePath)
				.resize({ width, height, fit })
				.toFormat('jpg')
				.toFile(path.join(output, `${i}-${name}.jpg`))
		}
		i++
	}
}

function createPlaceHolders() {
	const pathes = fs.readdirSync(outputDir).filter((p) => p.includes('-mini.jpg'))
	console.log(pathes)
	pathes.forEach((p) => {
		const filePath = path.join(outputDir, p)
		const outputPath = filePath.replace('-mini.jpg', '-placeholder.svg')
		potrace.trace(filePath, function (err, svg) {
			if (err) throw err
			fs.writeFileSync(outputPath, svg)
		})
	})
}

async function main() {
	clearDir(outputDir)
	await createImages(inputDir, outputDir)
	createPlaceHolders()
}

main()
