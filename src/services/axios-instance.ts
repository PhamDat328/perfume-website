import ENV from '@/configs/env.config';
import { CookieStoreObj } from '@/types/common';
import { convertObjectToCookies } from '@/utils/common';
import type { AxiosError } from 'axios';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${ENV.API_URL}/api`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  response => response.data,
  async (error: AxiosError) => Promise.reject(error.response?.data),
);

export const setHeaderCookies = (cookieStore: CookieStoreObj[]) => {
  axiosInstance.defaults.headers.Cookie = convertObjectToCookies(cookieStore);
};

export default axiosInstance;
