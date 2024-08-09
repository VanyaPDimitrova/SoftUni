import MAIN_URL from '../../common/MainUrl';

export const getAllCategories = () => {
  return fetch(`${MAIN_URL}/categories`)
    .then((res) => res.json());
};

export const createCategory = (data) => {
  return fetch(`${MAIN_URL}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token()}`,
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json());
};

export const updateCategory = (data, categoryId) => {
  return fetch(`${MAIN_URL}/categories/${categoryId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token()}`,
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json());
};

export const deleteCategoryById = (categoryId) => {
  return fetch(`${MAIN_URL}/categories/${categoryId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token()}`,
    },
  })
    .then((res) => res.json());
};
