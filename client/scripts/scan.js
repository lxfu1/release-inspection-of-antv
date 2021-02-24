/*
 * @Descripttion: 生成全量 demo 文件
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-24 16:55:09
 * @LastEditTime: 2021-02-24 23:54:30
 */
const fs = require('fs')
const path = require('path')
const { transform } = require('@babel/standalone')
const fp = path.resolve('../../', `G2Plot/examples`)
const codePath = path.resolve('./src')

const codes = []
let index = 0
const codeGenerator = () => {
	fs.writeFileSync(path.resolve(__dirname, codePath, `code.ts`), `export const codes = [${codes}]`)
}

const filter = code => {
	return code
		.replace(`('container',`, `('container-${index}',`)
		.replace(/`/g, '(**)')
		.replace(/\\n/g, '')
		.replace(/\\/g, '')
		.replace(`('container')`, `('container-${index}')`)
		.replace(/\$\{(\S*|\S*\/S*)\}/g, function (_, sign) {
			return `s1${sign}s1`
		})
}

// 改序号的文件 babel 转 es5 时会多加个 )，不知道为什么，感觉是 babel 的锅。
const specialFile = [
	'apple-watch-activity.ts',
	'background.ts',
	'statistics.ts',
	'nobel-prize.ts',
	'style.ts',
	'quadrant-tooltip.ts',
]

const scanFiles = (foldPath, dir) => {
	try {
		const files = fs.readdirSync(foldPath)
		files.forEach(fileName => {
			const director = path.join(foldPath + '/', fileName)
			const stats = fs.statSync(director)
			if (stats.isDirectory()) {
				scanFiles(director, dir ? `${dir}.${fileName}` : fileName)
			}
			if (stats.isFile() && fileName.endsWith('.ts')) {
				const filePath = path.resolve(__dirname, `../../../G2Plot/examples`, dir.split('.').join('/'), fileName)
				if (specialFile.includes(fileName)) {
					return
				}
				const { code } = transform(fs.readFileSync(filePath, 'utf-8'), {
					filename: fileName,
					presets: ['react', 'typescript', 'es2015'],
					plugins: ['transform-modules-umd'],
				})
				codes.push(`{fileName: "${fileName}", fileIndex: ${index}, code: ` + '`' + filter(code) + '`}')
				index += 1
			}
		})
		codeGenerator()
	} catch (err) {
		console.log(err)
	}
}

scanFiles(fp)
