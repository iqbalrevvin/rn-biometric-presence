import axios from 'axios';
import Config from 'react-native-config';

const ENDPOINT = {
    API_URL: Config.API_URL,
    API_KEY: Config.API_KEY,
};

const API = axios.create({
    baseURL: ENDPOINT,
    timeout: 1000,
    headers: {
        Accept: 'application/json',
    },
});

export default API;
