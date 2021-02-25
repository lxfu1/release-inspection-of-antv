/*
 * @Descripttion: 文件上传
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2020-05-20 14:58:02
 * @LastEditTime: 2021-02-25 14:17:42
 */
const chalk = require('chalk');
const fs = require('fs');
const { jsonMiddle } = require('../../utils');

const uploadScreenFile = async ctx => {
	const { fileData } = ctx.request.body;
	const base64Data = fileData.replace(/^data:image\/\w+;base64,/, '');
	const dataBuffer = new Buffer(base64Data, 'base64');
	const fileName = `static/file/${new Date().toLocaleDateString().replace(/\//g, '-')}.png`;
	try {
		fs.writeFileSync(fileName, dataBuffer);
	} catch (e) {
		console.log(chalk.red('文件保存失败' + e));
	}

	let data = {
		fileUrl: fileName.split('static/')[1],
	};
	ctx.response.body = jsonMiddle(data);
};

module.exports = {
	uploadScreenFile,
};
