import axios from 'axios';

let baseUrl = 'http://island.hellochaos.cn/island/api/v1';

const _Request = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    }
});

let Authorization = null;

/**
 * 统一对请求进行处理
 */
_Request.interceptors.request.use((config) => {
    // 当存在token的时候，将token加到请求头上面
    // if (localStorage.getItem("Authorization")) {
    //     config.headers['Authorization'] = JSON.parse(localStorage.getItem("Authorization")).value;
    //     // config.headers['Authorization'] = '3c7f60de-1374-453f-8c97-6a19f53e2207';
    // }
    if (Authorization) {
        config.headers['Authorization'] = Authorization ;
        // config.headers['Authorization'] = '3c7f60de-1374-453f-8c97-6a19f53e2207';
    }
    return config
}, error => {
    //403
    //500 做出相应的错误提示
});

// /**
//  * 统一对返回的数据进行过滤
//  */
_Request.interceptors.response.use((result) => {
    // 当没有前面的问题的时候，返回请求对象的数据
    //拿取头部证书
    // if(!localStorage.getItem("Authorization")) {
    //     localStorage.setItem("Authorization", JSON.stringify({
    //         value: result.headers.authorization,
    //     }))
    // }
    if(!Authorization) {
        Authorization = result.headers.authorization
    }
    return result.data;
}, (error) => {
    // 请求发生错误的时候
    return error;
});

export class Request {
    get(url) {
        return _Request.get(baseUrl + url);
    }

    post(url, data) {
        return _Request.post(baseUrl + url, JSON.stringify(data));
    }

    upload(url, data) {
        console.log(data);
        return _Request.post(baseUrl + url, data, {
            headers: {'Content-Type': 'multipart/form-data'}
        });
    }

    put(url, data) {
        console.log(data);
        return _Request.put(baseUrl + url, JSON.stringify(data));
    }
}

export {Authorization, baseUrl};
