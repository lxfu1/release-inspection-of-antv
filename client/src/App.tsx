import React, { useEffect, useState } from 'react';
import Gallery from './gallery';
import './App.css';

const EnvUrls = {
	online: 'https://unpkg.com/@antv/g2plot@latest',
	dev: '/g2plot.min.js',
};
const App: React.FC = () => {
	const [laoding, setLoading] = useState(true);
	const createScripts = () => {
		const exist = document.getElementById('dynamic-scripts');
		if (exist) {
			exist.parentNode?.removeChild(exist);
		}
		// 动态创建 script
		let script = document.createElement('script');
		script.src = window.location.search ? EnvUrls.dev : EnvUrls.online;
		script.id = 'dynamic-scripts';
		script.onload = function () {
			setLoading(false);
			// @ts-ignore
			window.g2pot = G2Plot;
		};
		document.getElementsByTagName('body')[0].appendChild(script);
	};
	useEffect(() => {
		createScripts();
	}, []);
	if (laoding) {
		return <div className="loading">脚本加载中</div>;
	}
	return <Gallery />;
};

export default App;
