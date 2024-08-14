import request from './requester';

const GAMES_URL = 'http://localhost:3030/jsonstore/games';

const getAll = async () => {
    const result = await request.get(GAMES_URL);

    const data = Object.values(result);
    
    return data;
};

const getOne = (gameId) => {
    const result = request.get(`${GAMES_URL}/${gameId}`);
    
    return result;
};

export default {
    getAll,
    getOne,
};

