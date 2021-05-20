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
