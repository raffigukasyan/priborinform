import axios from 'axios';
import { $authHost, $host } from './index';

export const getColTable = async (url) => {
  const { data } = await $authHost.get('/admin/tableCol', { params: { type: url } });
  return data;
};

export const getTableData = async (url, limit, page) => {
  const { data } = await $authHost.get('/admin/tableData', {
    params: {
      type: url,
      limit,
      page,
    },
  });
  return data;
};

export const getCategory = async () => {
  const { data } = await $authHost.get('/admin/AdminCategory');

  return data;
};

export const getSubCategory = async () => {
  const { data } = await $authHost.get('/admin/AdminSubCategory');

  return data;
};

export const createProduct = async (product) => {
  console.log(product);
  const { data } = await $authHost.post('/admin/product', product);
};
