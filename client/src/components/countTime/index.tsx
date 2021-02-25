/*
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-25 14:44:27
 * @LastEditTime: 2021-02-25 16:40:53
 */
import React, { useState, useEffect } from 'react';
import { worker } from '../worker';

interface Props {
	endTime: number;
	onEnd?: () => void;
}

const CountDownTimer: React.FC<Props> = ({ endTime, onEnd }: Props) => {
	const initTime = Math.floor((endTime - new Date().getTime()) / 1000);
	const [time, setTime] = useState(initTime);

	worker.onmessage = e => {
		if (e.data <= 0) {
			worker.postMessage({ state: 'stop' });
			return;
		}
		setTime(Math.floor(e.data / 1000));
	};

	useEffect(() => {
		worker.postMessage({
			state: 'start',
			endTime,
		});
		return () => {
			worker.postMessage({ state: 'stop' });
		};
	}, [endTime]);

	useEffect(() => {
		if (time <= 0) {
			if (onEnd) {
				onEnd();
			}
			worker.postMessage({ state: 'stop' });
		}
	}, [time, endTime, onEnd]);

	return (
		<div
			style={{
				height: 32,
				textAlign: 'center',
				background: 'green',
				color: '#fff',
				lineHeight: '32px',
			}}
		>
			{time ? `${time} 秒后自动截图` : '截图完成'}
		</div>
	);
};

export default CountDownTimer;
