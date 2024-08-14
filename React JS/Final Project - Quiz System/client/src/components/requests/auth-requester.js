const AUTH_URL = 'http://localhost:3030/users'

export const login = ({ email, password }) => {
    return fetch(`${AUTH_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    })
      .then((res) => res.json());
  };