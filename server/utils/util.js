// 获取get请求的参数
const getUrl = url => {
	if (!url) {
		return;
	}
	var res = {};
	if (url.indexOf('?') !== -1) {
		var _url = url.split('?')[1];
		var params = _url.split('&');
		for (let i = 0; i < params.length; i++) {
			var kv = params[i].split('=');
			res[kv[0]] = decodeURI(kv[1]);
		}
	}

	return res;
};

/**
 * 创建md5
 * */
const MD5 = data => {
	const crypto = require('crypto');
	const md5 = crypto.createHash('md5');
	return md5.update(data).digest('hex');
};

const getFormateDate = () => {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	// const minutes = date.getMinutes();

	return `${year}-${month > 9 ? month : '0' + month}-${day > 9 ? day : '0' + day}`;
};

module.exports = {
	getUrl,
	MD5,
	getFormateDate,
};
