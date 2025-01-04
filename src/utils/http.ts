import axios from "axios"

const httpInstance = axios.create(

    {
        baseURL: 'https://4d05995d-c8cf-4640-a38d-dd1828b3fbdb.mock.pstmn.io',
        timeout: 10000,
    }
)

httpInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

httpInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export { httpInstance };