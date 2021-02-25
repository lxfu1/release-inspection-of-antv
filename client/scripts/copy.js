/*
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-25 00:00:43
 * @LastEditTime: 2021-02-25 14:25:21
 */
const shell = require('shelljs');
// 删除 server 静态文件
shell.exec('rm -rf ../server/static/static');
// 复制当前打包文件
shell.exec('cp -r ./static/ ../server/static');
