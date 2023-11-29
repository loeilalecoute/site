import fs, { writeFileSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'
import potrace from 'potrace'
const inputDir = 'rawImages'
const outputDir = 'static/portfolio'

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
async function createMiniatures(input, output) {
	const pathes = fs.readdirSync(input)
	let i = 0
	for await (const p of pathes) {
		const filePath = path.join(input, p)
		await sharp(filePath)
			.resize({ width: 446, height: 251, fit: 'cover' })
			.toFormat('webp')
			.toFile(path.join(output, `${i}-mini.webp`))
		await sharp(filePath)
			.resize({ width: 446, height: 251, fit: 'cover' })
			.toFormat('jpg')
			.toFile(path.join(output, `${i}-mini.jpg`))
		i++
	}
}

/**
 * @param {string} input
 * @param {string} output
 */
async function createLarges(input, output) {
	const pathes = fs.readdirSync(input)
	let i = 0
	let imagesData = []
	for await (const p of pathes) {
		const filePath = path.join(input, p)
		const { width, height } = await sharp(filePath)
			.resize({ width: 1200, height: 1200, fit: 'inside' })
			.toFormat('webp')
			.toFile(path.join(output, `${i}-large.webp`))
		await sharp(filePath)
			.resize({ width: 1200, height: 1200, fit: 'inside' })
			.toFormat('jpg')
			.toFile(path.join(output, `${i}-large.jpg`))
		imagesData.push({ width, height })
		i++
	}
	writeFileSync('src/lib/_imagesData.json', JSON.stringify(imagesData), 'utf8')
}

function createPlaceHolders() {
	const pathes = fs.readdirSync(outputDir).filter((p) => p.includes('-mini.jpg'))
	pathes.forEach((p) => {
		const filePath = path.join(outputDir, p)
		const outputPath = filePath.replace('-mini.jpg', '-placeholder.svg')
		potrace.trace(filePath, { color: '#70c2c0' }, function (err, svg) {
			if (err) throw err
			fs.writeFileSync(outputPath, svg)
		})
	})
}

async function main() {
	clearDir(outputDir)
	await createMiniatures(inputDir, outputDir)
	await createLarges(inputDir, outputDir)
	createPlaceHolders()
}

main()
