import axios from 'axios';
import { addRequestSignature } from '@/apis/interceptors.js';

const BASE_URL = 'http://localhost:8080';
const DEFAULT_TIMEOUT = 1000;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(addRequestSignature);
