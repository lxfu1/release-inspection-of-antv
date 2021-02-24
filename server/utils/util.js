/*
 * @Descripttion: 公用函数
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2020-05-20 14:58:02
 * @LastEditTime: 2021-02-24 23:43:23
 */
// 获取get请求的参数
const getUrl = url => {
	if (!url) {
		return
	}
	var res = {}
	if (url.indexOf('?') !== -1) {
		var _url = url.split('?')[1]
		var params = _url.split('&')
		for (let i = 0; i < params.length; i++) {
			var kv = params[i].split('=')
			res[kv[0]] = decodeURI(kv[1])
		}
	}

	return res
}

/**
 * 创建md5
 * */
const MD5 = data => {
	const crypto = require('crypto')
	const md5 = crypto.createHash('md5')
	return md5.update(data).digest('hex')
}

module.exports = {
	getUrl,
	MD5,
}
