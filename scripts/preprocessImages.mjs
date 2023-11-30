import fs from 'node:fs'
import crypto from 'node:crypto'
import path from 'node:path'
import sharp from 'sharp'
import potrace from 'potrace'

const INPUTDIR = 'rawImages'
const OUTPUTDIR = 'static/portfolio'
/** @type {(keyof sharp.FormatEnum)[]} */
const IMAGEFORMATS = ['jpg', 'webp']

async function main() {
	clearDir(OUTPUTDIR)
	const fileNames = getAllImagesPathes(INPUTDIR).sort(() => 0.5 - Math.random())
	const miniaturesData = await transformImages(fileNames, { width: 446, height: 251, fit: 'cover' })
	const largesData = await transformImages(fileNames, { width: 1200, height: 1200, fit: 'inside' })
	const miniaturesPathes = miniaturesData.map(({ hash }) => path.join(OUTPUTDIR, `${hash}.jpg`))
	const placeHoldersHash = createPlaceHolders(miniaturesPathes, OUTPUTDIR, '#FCCC03')

	createJson(path.join('src/lib', '_imagesData.json'), {
		mini: miniaturesData,
		larges: largesData,
		placeHolders: placeHoldersHash
	})
}

/**
 *
 * @param {string[]} fileNames
 * @param {sharp.ResizeOptions} options
 *
 */
async function transformImages(fileNames, options) {
	let imagesData = []
	for await (const file of fileNames) {
		const inputPath = path.join(INPUTDIR, file)
		const datas = await transformImage(inputPath, OUTPUTDIR, options, IMAGEFORMATS)
		imagesData.push(datas)
	}
	return imagesData
}

/**
 * @param {string} filePath
 * @param {string} outDir
 * @param {sharp.ResizeOptions} options
 * @param {(keyof sharp.FormatEnum)[]} formats
 */
async function transformImage(filePath, outDir, options, formats) {
	const hash = crypto.randomUUID()
	/**@type {{hash:string,width:number,height:number}} */
	let data = undefined
	for await (const format of formats) {
		const fileName = `${hash}.${format}`
		const { width, height } = await sharp(filePath)
			.resize(options)
			.toFormat(format)
			.toFile(path.join(outDir, fileName))
		if (!data) data = { hash, width, height }
	}
	return data
}

/**
 * @param {string[]} filePathes
 * @param {string} outDir
 * @param {string} color
 * @returns
 */
function createPlaceHolders(filePathes, outDir, color) {
	const hashes = []
	for (const filePath of filePathes) {
		const hash = crypto.randomUUID()
		potrace.trace(filePath, { color }, function (err, svg) {
			if (err) throw err
			fs.writeFileSync(path.join(outDir, `${hash}.svg`), svg)
		})
		hashes.push({ hash })
	}
	return hashes
}

/**
 *
 * @param {string} output
 * @param {Object} datas
 */
function createJson(output, datas) {
	fs.writeFileSync(output, JSON.stringify(datas), 'utf8')
}

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
 * @param {string} dir
 */
function getAllImagesPathes(dir) {
	const pathes = fs.readdirSync(dir)
	return pathes.filter((p) => /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(p))
}

main()
