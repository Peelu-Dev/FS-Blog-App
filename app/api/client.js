import axios from 'axios';

const client = axios.create({baseURL: 'http://192.168.29.161:2121/api'})

export default client;