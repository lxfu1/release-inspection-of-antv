const open = require('open');

const openImage = async imagePath => {
	await open(imagePath, { wait: true });
	process.exit();
};

module.exports = openImage;
