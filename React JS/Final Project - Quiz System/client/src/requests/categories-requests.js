import accessToken from '../services/get-token';
import MAIN_URL from './../common/MainUrl';
const MAIN_URL_PUBLIC = `${MAIN_URL}/jsonstore`;
const MAIN_URL_PRIVATE = `${MAIN_URL}/data`;

export const getAllCategoriesPublic = () => {
  return fetch(`${MAIN_URL_PUBLIC}/categories`)
    .then((res) => res.json());
};

export const getAllCategoriesPrivate = () => {
  return fetch(`${MAIN_URL_PRIVATE}/categories`, {
    headers: {
      'X-Authorization': `${accessToken()}`,
    },
  })
    .then((res) => res.json());
};

export const createCategory = (data) => {
  return fetch(`${MAIN_URL_PRIVATE}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': `${accessToken()}`,
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json());
};

export const updateCategory = (data, categoryId) => {
  return fetch(`${MAIN_URL_PRIVATE}/categories/${categoryId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': `${accessToken()}`,
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json());
};

export const deleteCategoryById = (categoryId) => {
  return fetch(`${MAIN_URL_PRIVATE}/categories/${categoryId}`, {
    method: 'DELETE',
    headers: {
      'X-Authorization': `${accessToken()}`,
    },
  })
    .then((res) => res.json());
};
