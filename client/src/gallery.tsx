/*
 * @Descripttion: Gallery
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-24 15:42:12
 * @LastEditTime: 2021-02-25 16:45:11
 */
import React, { Fragment, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import CountTime from './components/countTime';
import { codes } from './code';
import { uploadCanvas } from './upload';

const RenderTime = 20000;

const execute = (code: string, node: HTMLDivElement) => {
	const script = document.createElement('script');
	script.innerHTML = `
    try {
      ${code}
    } catch(e) {
      console.error(e);
    }
  `;
	node.appendChild(script);
};

const PlayGround: React.FC = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		codes.forEach(item => {
			execute(
				item.code.replace(/\(\*\*\)/g, '`').replace(/s1(\S*)s1/g, (_, sign: string) => {
					return '${' + sign + '}';
				}),
				document.querySelector(`#box-${item.fileIndex}`) as HTMLDivElement
			);
		});
	}, []);

	const renderCanvas = () => {
		if (containerRef?.current) {
			html2canvas(containerRef?.current).then(async canvas => {
				const res: any = await uploadCanvas({
					fileData: canvas.toDataURL('image/png'),
				});
				if (res?.status === 200) {
					alert(`截图已经上传，存放路径: workspace/service/static/${res.data.fileUrl}`);
				} else {
					alert('截图上传失败');
				}
			});
		}
	};

	return (
		<Fragment>
			{/* <CountTime
				endTime={new Date().getTime() + RenderTime}
				onEnd={() => {
					renderCanvas();
				}}
			/> */}
			<div className="charts-container" ref={containerRef}>
				{codes.map(item => (
					<div key={item.fileName + item.fileIndex} id={`box-${item.fileIndex}`}>
						<div id={`container-${item.fileIndex}`}></div>
					</div>
				))}
			</div>
		</Fragment>
	);
};

class ErrorHandlerPlayGround extends React.Component {
	state = {
		error: undefined,
	};

	static getDerivedStateFromError(error: Error) {
		// 更新 state 使下一次渲染能够显示降级后的 UI
		return { error };
	}

	render() {
		const { error } = this.state;
		if (error) {
			// 你可以自定义降级后的 UI 并渲染
		}
		return <PlayGround {...this.props} />;
	}
}

// export default ErrorHandlerPlayGround;
export default ErrorHandlerPlayGround;
