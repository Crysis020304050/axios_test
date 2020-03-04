import axios from 'axios';
import {BASE_URL} from './index';

export const singIn = (email, password) => axios.post(`${BASE_URL}/sing_in`, {email, password});
export const singUp = (data) => axios.post(`${BASE_URL}/sing_up`, {data});