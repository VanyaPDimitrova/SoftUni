import BASE_URL from '../common/BaseUrl';

export const getAllUsers = () => {
    return fetch(`${BASE_URL}/users`)
        .then((res) => res.json());
}

export const createUser = () => {
    return fetch(`${BASE_URL}/users`)
}

export const deleteUser = (id) => {
    return fetch(`${BASE_URL}/users/${id}`)
} 

export const updateUser = (id) => {
    return fetch(`${BASE_URL}/users/${id}`)
}

