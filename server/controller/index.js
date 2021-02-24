// 主页
const { index } = require('./home')
// 截图上传
const { uploadScreenFile } = require('./screenshot')

module.exports = {
	'GET /': index,
	'POST /inspect/upload': uploadScreenFile,
}
