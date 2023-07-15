import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (name, surname, phone, email, password) => {
  const { data } = await $host.post('/user/registration', {
    name,
    surname,
    phone,
    email,
    password,
  });
  localStorage.setItem('token', data.token);

  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post('/user/login', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get('/user/auth');
  console.log(data);
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};
