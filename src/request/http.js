/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';

import QS from 'qs';

// import store from '../store/index'
 
// 环境的切换
// if (process.env.NODE_ENV == 'development') {    
//     axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {    
//     axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {    
//     axios.defaults.baseURL = 'http://api.123dailu.com/';
// }
axios.defaults.baseURL='http://localhost:3000/';
// 请求超时时间
axios.defaults.timeout = 10000;
 
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
 
// 请求拦截器
axios.interceptors.request.use(    
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // const token = store.state.token;        
        // token && (config.headers.Authorization = token);        
        // console.log('我是拦截器',config)
        return config;    
    },    
    error => {        
        return Promise.error(error);    
    })
 
// 响应拦截器
axios.interceptors.response.use(    
    response => {        
        // console.log('我是响应拦截器',response)
        // 响应拦截下的数据，可以添加自己的处理和操作，比如添加loading效果..
        if (response.status === 200) {        
            // Promise是对异步进程的封装 是一个类
            //Promise 参数是一个函数   
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
    },
    // 服务器状态码不是200的情况    
    error => {        
        if (error.response.status) {            
            switch (error.response.status) {                
                // 401: 未登录                
                // 未登录则跳转登录页面，并携带当前页面的路径                
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                case 401:                    
                    // router.replace({                        
                    //     path: '/login',                        
                    //     query: { redirect: router.currentRoute.fullPath } 
                    // });
                    break;
                             
                default:                    
                    // Toast({                        
                    //     message: error.response.data.message,                        
                    //     duration: 1500,                        
                    //     forbidClick: true                    
                    // });            
            }            
            return Promise.reject(error.response);        
        }       
    }
);
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        })        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {    
    return new Promise((resolve, reject) => {         
        axios.post(url, QS.stringify(params))        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}












