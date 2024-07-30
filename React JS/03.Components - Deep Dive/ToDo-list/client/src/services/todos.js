import BASE_URL from './../common/BaseUrl';

export const getAllTodos = () => {
    return fetch(`${BASE_URL}/todos`)
        .then((res) => res.json());
}
