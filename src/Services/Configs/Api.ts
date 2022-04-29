import axios from 'axios';
import Config from 'react-native-config';

export const ENDPOINT = {
    API_URL: Config.API_URL,
    API_KEY: Config.API_KEY,
    AUTH: {
        LOGIN: 'login',
        REGISTER: 'register',
    },
    PRESENCE: {
        LIST: 'list-presence',
        REGISTER: 'register-biometric',
        HIT: 'hit-presence',
    },
};

const API = axios.create({
    headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    baseURL: ENDPOINT.API_URL,
    timeout: 1000,
});

export default API;
