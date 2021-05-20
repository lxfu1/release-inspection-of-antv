import axios from 'axios';

export const uploadCanvas = (params: { fileData: string }) => {
	return new Promise(async resolve => {
		const res = await axios.post('http://localhost:3000/inspect/upload', params);
		resolve(res?.data);
	});
};
