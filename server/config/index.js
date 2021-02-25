/*
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2020-05-20 14:58:02
 * @LastEditTime: 2021-02-25 13:23:50
 */
const baseConfig = {
	port: process.env.NODE_ENV === 'production' ? 80 : 3000,
};

module.exports = baseConfig;
