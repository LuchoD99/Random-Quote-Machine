import { URL } from '../config/url';
import axios from 'axios';
export const getRandomQuote = async () => {
    const response = await axios.get(URL.GET_RANDOM_QUOTE);
    const data = response.data;
    return data;
};
