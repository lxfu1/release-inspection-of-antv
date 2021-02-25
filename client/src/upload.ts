/*
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-25 11:24:34
 * @LastEditTime: 2021-02-25 14:20:53
 */
import axios from 'axios';

export const uploadCanvas = (params: { fileData: string }) => {
	return new Promise(async resolve => {
		const res = await axios.post('http://localhost:3000/inspect/upload', params);
		resolve(res?.data);
	});
};
