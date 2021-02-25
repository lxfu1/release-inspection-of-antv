/*
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-25 20:45:27
 * @LastEditTime: 2021-02-25 20:51:45
 */
const fs = require('fs');
const chalk = require('chalk');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const compareImage = (path1, path2) => {
	console.log(chalk.green('\n****** 截图比对中 ******\n'));
	const img1 = PNG.sync.read(fs.readFileSync(path1));
	const img2 = PNG.sync.read(fs.readFileSync(path2));
	const { width, height } = img1;
	const diff = new PNG({ width, height });
	pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });
	const diffPath = `static/file/${new Date().toLocaleDateString().replace(/\//g, '-')}-diff.png`;
	fs.writeFileSync(diffPath, PNG.sync.write(diff));
	console.log(chalk.green('\n****** 截图比对完成 ******\n'));
	process.exit();
};

module.exports = compareImage;
