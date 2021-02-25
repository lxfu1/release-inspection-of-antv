/*
 * @Descripttion: json 封装
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2020-05-20 14:58:02
 * @LastEditTime: 2021-02-25 16:19:16
 */
//json封装
const jsonMiddle = (data, code, message) => {
	let json = {
		status: code || 200,
		data: data,
		message: message || 'success',
	};
	return json;
};

module.exports = jsonMiddle;
