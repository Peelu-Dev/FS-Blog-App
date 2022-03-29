import axios from 'axios';

const client = axios.create({baseURL: 'http://your_IP:2121/api'})

export default client;