import axios from 'axios';
import moment from 'moment';
import AuthCookie from '@/lib/auth';
import { apiList } from './api';
import { Notification } from '@/ui';

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  header: {
    'Content-Type': 'application/json',
  },
});

baseAxios.interceptors.request.use(
  async (config) => {
    const token = AuthCookie.getToken();
    const token_exp = AuthCookie.getTokenExp();
    const refresh_token = AuthCookie.getRefreshToken();

    let today = moment(new Date());
    today = today.add(5, 'minutes');

    if (moment(new Date(token_exp)).isSameOrBefore(today)) {
      const fetchURL = process.env.NEXT_PUBLIC_API_URL + apiList.refreshToken;
      const fetchtOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh_token, token }),
      };

      const refResponse = await fetch(fetchURL, fetchtOptions);
      const refData = await refResponse.json();

      if (refData.code == '0000') {
        const { data: DATA } = refData;

        AuthCookie.setToken(DATA.token, DATA.refresh_token, DATA.exp);
        config.headers.Authorization = `Bearer ${DATA.token}`;

        return config;
      }
    } else {
      config.headers.Authorization = `Bearer ${token}`;

      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

let count = 0;
baseAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      if (count === 0) {
        count++;
        return redirectToLogin();
      }
    } else {
      return;
    }

    return Promise.reject(error);
  }
);

const redirectToLogin = () => {
  Notification.error({ desc: 'Таны хандах эрх дууссан байна!' });

  setTimeout(() => {
    count = 0;
    location.replace('/logout');
  }, 100);
};

export default baseAxios;
