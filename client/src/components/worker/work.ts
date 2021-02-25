/*
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-25 14:45:00
 * @LastEditTime: 2021-02-25 14:45:15
 */
export default class WebWorker {
	constructor(worker: WebWorker) {
		const code = worker.toString();
		const blob = new Blob([`(${code})()`]);
		return new Worker(URL.createObjectURL(blob));
	}
}
