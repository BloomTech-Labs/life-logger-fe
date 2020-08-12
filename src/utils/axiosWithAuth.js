import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://lyfe-logger-be.herokuapp.com',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
};
