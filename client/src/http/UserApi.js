import { $authHost, $host } from './index';

export const registration = async (name, surname, phone, email, password) => {
  const response = await $host.post('/user/registration', {
    name,
    surname,
    phone,
    email,
    password,
  });
  return response;
};

export const login = async (email, password) => {
  const response = await $host.post('/user/login', { email, password });
  return response;
};

export const check = async () => {
  const response = await $host.post('/user/');
};
