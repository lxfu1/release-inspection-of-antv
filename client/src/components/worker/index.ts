import WebWorker from './work';

const work = () => {
	let timer: NodeJS.Timeout | null;
	onmessage = e => {
		const { endTime, state } = e.data;
		if (state === 'stop') {
			if (timer) {
				clearInterval(timer);
				timer = null;
			}
		} else if (state === 'start') {
			if (!timer) {
				timer = setInterval(() => {
					// @ts-ignore
					postMessage(endTime - new Date().getTime());
				}, 1000);
			}
		}
	};
};

export const worker = new WebWorker(work) as Worker;
