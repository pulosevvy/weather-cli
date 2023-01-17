import {getKeyValue, TOKEN_DICTIONARY} from './storage.service.js';
import axios from "axios";

const getIcon = (icon) => {
    return '🌡';
}

const getWeather = async(city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);

    if (!token) {
        throw new Error('Set The API Key: -t [API_KEY]')
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metrics',
        },
    });
    return data;
};

export { getWeather, getIcon };