import fetch from 'node-fetch';
import supertest from 'supertest';
import urls from '../config/urls';

/*
* @param { get } Получить список пользователей
* @param {object} Создание пользователя
 */
const Users = {
  get: async (params) => {
    const r = await fetch(`${urls.reqres}api/users?${params}`, { method: 'GET' });
    return r;
  },
  getS: async (params) => {
    const r = await supertest(`${urls.reqres}`).get(`api/users?${params}`).set('Accept', 'application/json');
    return r;
  },
  create: async (user) => {
    const r = await fetch(`${urls.reqres}api/users`, { method: 'POST', body: JSON.stringify(user)});
    return r;
  },
};

export default Users;
