/*
 * @Descripttion: 文件上传
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2020-05-20 14:58:02
 * @LastEditTime: 2021-02-24 22:59:04
 */
const { jsonMiddle } = require('../../utils')

const uploadScreenFile = async (ctx, next) => {
	let fileUrl = ctx.request.files.file.path.replace(/\\/g, '/').split('insepect_service')[1]
	if (fileUrl) {
		fileUrl = fileUrl.substring(7)
	}
	let data = {
		fileUrl: fileUrl,
	}
	ctx.response.body = jsonMiddle(data)
}

module.exports = {
	uploadScreenFile,
}
