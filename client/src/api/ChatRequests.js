import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:8000/api/v1' });

export const createChat = (data) => API.post('/conversation/', data);

export const userChats = (id) => API.get(`/conversation/${id}`);

export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`);