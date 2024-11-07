import axios from 'axios';
import { Notification } from '@/ui';
import { destroyTokens, getToken } from '@/lib/auth';
import { checkAuthPage } from '@/lib/helper';

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  header: {
    'Content-Type': 'application/json',
  },
});

baseAxios.interceptors.request.use(
  function (config) {
    const token = getToken();
    const removeToken = !!config[0];

    if (token && !removeToken) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

let count = 0;
baseAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (checkAuthPage()) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        if (count === 0) {
          count++;

          return redirectToLogin();
        }
      }

      return Promise.reject(error);
    }
  }
);

const redirectToLogin = () => {
  Notification.error({ desc: 'Таны хандах эрх дууссан байна!' });

  setTimeout(() => {
    count = 0;

    destroyTokens(true);
  }, 1000);
};

export default baseAxios;
