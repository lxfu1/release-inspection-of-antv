const templating = require('./template')
const staticFiles = require('./static-file')
const jsonMiddle = require('./jsonMiddle')
const upload = require('./upFile')
const { getUrl, MD5 } = require('./util')

module.exports = {
	templating,
	staticFiles,
	jsonMiddle,
	upload,
	getUrl,
	MD5,
}
