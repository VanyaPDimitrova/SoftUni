const AUTH_URL = 'http://localhost:3030/users'

const useFetch = (page,  data ) => {
    return fetch(`${AUTH_URL}${page}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data })
      })
        .then((res) => res.json());
}

export const login = ({ email, password }) => {
    return useFetch('/login', { email, password });
};

  export const register = ({ email, password, role }) => {
    return useFetch('/register', { email, password, role }); 
  };
