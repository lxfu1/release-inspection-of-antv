/*
 * @Descripttion: 主页
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-24 23:35:15
 * @LastEditTime: 2021-02-24 23:38:10
 */
var index = async (ctx, next) => {
	ctx.type = 'text/html'
	ctx.render('index.html')
}

module.exports = {
	index,
}
