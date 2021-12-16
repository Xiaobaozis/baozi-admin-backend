import axios from './axios'

export const getMenu = () => {
    return axios.request({
        url: 'menu',
        method: 'get'
    })
}

export const getHome = () => {
    console.log(111111);
    return axios.request({
        url: '/api/home/getData',
        method: 'get'
    })
}