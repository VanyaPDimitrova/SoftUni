import * as request from './requester';

const GAMES_URL = 'http://localhost:3030/jsonstore/games';
export const getAll = () => request.get(GAMES_URL);
