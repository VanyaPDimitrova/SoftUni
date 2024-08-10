import * as request from './requester';

const GAMES_URL = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
    const result = await request.get(GAMES_URL);

    const data = Object.values(result);
    
    return data;
};

export const getOne = (gameId) => {
    const result = request.get(`${GAMES_URL}/${gameId}`);
    
    return result;
};
