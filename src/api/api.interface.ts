import axios from 'axios';
import { getContentType } from './api.helper';

export const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
	method: 'POST',
	headers: getContentType()
});
