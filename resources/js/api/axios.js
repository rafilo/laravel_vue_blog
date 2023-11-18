import axios from "axios"

const Api = axios.create({
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'X-Requested-With': 'XMLHttpRequest'
    },
    timeout: 30000,
})

function errorHandle(response) {
    switch (response.status) {
        case 400:
            // Promise.resolve("400")
            // other logics which need async can be inserted here
            return '400'
        case 401:
            return '401'
        case 404:
            return '404'
        default:
            throw new Error("未知错误");
    }
}

function successHandle(response) {
    switch (response.status) {
        case 200:
            return response.data;
        default:
            return;
    }
}

Api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        error.data = {};
        error.data.msg = "服务器异常";
        return Promise.resolve(error);
    }
);

Api.interceptors.response.use(
    (response) => {
        successHandle(response);
    },
    (err) => {
        errorHandle(err);
    }
);

export default Api
