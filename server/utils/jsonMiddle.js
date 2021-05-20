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
