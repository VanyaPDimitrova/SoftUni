import BASE_URL from '../common/BaseUrl';

export const getAllUsers = () => {
    return fetch(`${BASE_URL}/users`)
        .then((res) => res.json());
}

export const createNewUser = (userData) => {
    return fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    }).then((res) => res.json());
}

export const deleteUserById = (id) => {
    return fetch(`${BASE_URL}/users/${id}`, {
        method: 'DELETE',
    }).then(res => res.json());
} 

export const updateUser = (id) => {
    return fetch(`${BASE_URL}/users/${id}`)
}

