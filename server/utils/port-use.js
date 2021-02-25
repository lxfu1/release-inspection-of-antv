/*
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-25 11:55:59
 * @LastEditTime: 2021-02-25 13:29:26
 */
const net = require('net');

function portInUse(port) {
	return new Promise((resolve, reject) => {
		let server = net.createServer().listen(port);
		server.on('listening', function () {
			server.close();
			resolve(port);
		});
		server.on('error', function (err) {
			if (err.code == 'EADDRINUSE') {
				resolve(err);
			}
		});
	});
}

const checkPort = async function (port, portAvailableCallback) {
	let res = await portInUse(port);
	console.log(res);
	if (res instanceof Error) {
		return;
	} else {
		portAvailableCallback(port);
	}
};

module.exports = checkPort;
