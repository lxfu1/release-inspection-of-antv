/*
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-25 16:16:41
 * @LastEditTime: 2021-02-25 20:48:10
 */
const puppeteer = require('puppeteer');
const delay = require('delay');
const chalk = require('chalk');
const compareImage = require('./compare');

const renderTime = 20000;
const createBrowser = async () => {
	// 在线截图
	console.log(chalk.green('\n****** 在线截图生成中 ******\n'));
	const onlineBrowser = await puppeteer.launch();
	const onlinePage = await onlineBrowser.newPage();
	await onlinePage.setViewport({
		width: 1440,
		height: 11000,
		deviceScaleFactor: 1,
	});
	await onlinePage.goto('http://localhost:3000');
	await delay(renderTime);
	const onlinePath = `static/file/${new Date().toLocaleDateString().replace(/\//g, '-')}-online.png`;
	await onlinePage.screenshot({
		path: onlinePath,
	});
	console.log(chalk.green('\n****** 在线截图生成完成 ******\n'));
	await onlineBrowser.close();

	// 本地截图
	console.log(chalk.green('\n****** 本地截图生成中 ******\n'));
	const localBrowser = await puppeteer.launch();
	const localPage = await localBrowser.newPage();
	await localPage.setViewport({
		width: 1440,
		height: 11000,
		deviceScaleFactor: 1,
	});
	await localPage.goto('http://localhost:3000?env=local');
	await delay(renderTime);
	const localPath = `static/file/${new Date().toLocaleDateString().replace(/\//g, '-')}-local.png`;
	await localPage.screenshot({
		path: `static/file/${new Date().toLocaleDateString().replace(/\//g, '-')}-local.png`,
	});
	console.log(chalk.green('\n****** 本地截图生成完成 ******\n'));
	await localBrowser.close();
	compareImage(onlinePath, localPath);
};

module.exports = createBrowser;
