import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
     const URL = 'http://localhost:5000'
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    },URL)
}