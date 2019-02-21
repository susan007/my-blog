const axios = require('axios')
class httpRequest{
    constructor(baseUrl = 'http://localhost:3000'){
        this.baseUrl = baseUrl
    }
    getInsideConfig() {
        return {
            baseUrl: this.baseUrl,
            headers: {}
        }
    }

    interceptors(instance){
        instance.interceptors.response.use(res => {
            const  {data} = res
            return data
        }, error => {
            return Promise.reject(error)
        })
    }

    request(options){
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance)
        return instance(options)
    }
}

/**
 * 导出request模块
 */
module.exports.requestPromise =  (port,method='get')=>{
    const Http = new HttpRequest('http://localhost:3000')
    return Http.request({
        url: port,
        method
    })
}

module.exports.requestCallback = (cb,port,method='get')=>{
    const Http = new HttpRequest('http://localhost:3000')
    Http.request({
        url: port,
        method
    }).then(data=>{

        // ▽请注释掉下面一行，再试一试回调能否跑通？
        cb(data)
    })
}
