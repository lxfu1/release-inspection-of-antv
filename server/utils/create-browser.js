/*
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-25 16:16:41
 * @LastEditTime: 2021-02-25 16:41:52
 */
const puppeteer = require('puppeteer');
const delay = require('delay');

const renderTime = 20000;
const createBrowser = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.setViewport({
		width: 1440,
		height: 12000,
		deviceScaleFactor: 1,
	});
	await page.goto('http://localhost:3000');
	await delay(renderTime);
	await page.screenshot({ path: 'example.png' });
	await browser.close();
};

module.exports = createBrowser;
