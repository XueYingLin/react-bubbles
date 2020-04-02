import axios from 'axios';

// We'll use this token to interact with the API
//Save the token to localStorage
//Build a axiosWithAuth module to create an instancce of axios with authentication header

export const axiosWithAuth = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: token
        }
    });
}