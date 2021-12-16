// 拦截器
import axios from 'axios'
import config from '../config/index'
//设置配置  根据开发 和生产环境不一样
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequst {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    getInsideCongfig() {
        baseURL: this.baseUrl
        header: {

        }
        return config
    }


    interceptors(instance) {
        instance.interceptors.request.use(function(config) {
            // 再发送请求之前做什么
            console.log('拦截处理请求');
            return config;
        }, function(error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        instance.interceptors.response.use(function(response) {
            // 对应用数据做点什么
            console.log('处理响应');
            return response.data;
        }, function(error) {
            console.log(error);
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }

    request(Options) {
        //请求
        // /api/getList  /api/getHome
        const instanse = axios.create()
            //技巧
        Options = {...(this.getInsideCongfig), ...Options }
        this.interceptors(instanse)
        return instanse(Options)
    }
}

export default new HttpRequst(baseUrl)