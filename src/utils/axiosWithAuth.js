import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    console.log('token from axiosWithAuth: ', token);

    return axios.create({
        baseURL: '',
        headers: {
            Authorization: token
        }
    })
}