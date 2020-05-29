import axios from 'axios';
import {baseUrl, Authorization} from "./request";

const successCode = "1";
const successMsg = "success";
const Request = axios.create({
	baseURL: baseUrl,
	headers: {
		'Content-Type': 'application/json',
	}
});

/**
 * 统一对请求进行处理
 */
Request.interceptors.request.use((config) => {
	config.headers['Authorization'] = Authorization;
	return config;
}, error => {

});

// /**
//  * 统一对返回的数据进行过滤
//  */
Request.interceptors.response.use((result) => {
	let {data} = result;
	let {code, message} = data;
	if (successCode === code || successMsg === message) {
		return data.data;
	} else {
		console.log(Authorization)
		if (code === "3001") {
			window.location.hash = "/login";
		}

		return Promise.reject(data);
	}
}, (error) => {
	// 请求发生错误的时候
	return error;
});


class Api {
	get(url, data) {
		return Request.get(url, {
			params : data
		})
	}
	post(url, data) {
		return Request.post(url, data);
	}

	upload(url, data) {
		if (!(data instanceof FormData)) {
			data = dataToFormData(data);
		}
		return Request.post(url, data, {
			headers: {'Content-Type': 'multipart/form-data'}
		});
	}

	put(url, data) {
		console.log(data);
		return Request.put(url, data);
	}
}

function dataToFormData(data) {
	let formData = new FormData();
	Object.keys(data).forEach((key) => {
		formData.append(key, data[key]);
	});
	return formData;
}

export default new Api();
