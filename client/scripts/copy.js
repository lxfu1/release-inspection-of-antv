/*
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-25 00:00:43
 * @LastEditTime: 2021-02-25 17:54:27
 */
const shell = require('shelljs');
// 复制本地 g2plot.min.js
shell.exec('cp -r ../../G2Plot/dist/g2plot.min.js ../server/static');
// 删除 server 静态文件
shell.exec('rm -rf ../server/static/static');
// 复制当前打包文件
shell.exec('cp -r ./static/ ../server/static');
