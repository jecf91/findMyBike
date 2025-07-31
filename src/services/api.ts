import { BASE_URL } from '@/constants';
import type { AxiosInstance } from 'axios';
import axios from 'axios';

export const apiInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
