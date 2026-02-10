// ============================================
// CONFIGURACIÓN DE AXIOS PARA API CALLS
// ============================================
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { API_BASE_URL, TOKEN_KEY } from './constants'


const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})


api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = window.localStorage.getItem(TOKEN_KEY)

    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
}, (error) => {
    return Promise.reject(error)
})



api.interceptors.response.use((response: AxiosResponse) => {
    return response.data

}, (error) => {

    if (error.response?.status === 401) {

        window.localStorage.removeItem(TOKEN_KEY)
        window.location.href = '/'
    }

    return Promise.reject(error)

})

export { api }

