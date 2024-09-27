import baseAxios from './baseAxios';
import { Notification } from '@/ui';

const callGet = async (command) => {
  const result = await baseAxios.get(command);

  return result?.status === 200 ? result.data : null;
};

const callPost = async (command, data, hideMsg = false) => {
  const result = await baseAxios.post(command, data);

  if (result?.status === 403) {
    Notification.error({ desc: 'Хандах эрхгүй' });
    return;
  }

  if (!result) {
    Notification.error({ desc: 'Та интернет холболтоо шалгана уу!' });
    return;
  }

  if (result?.status !== 200 || !result.data) {
    Notification.error({ desc: 'Та түр хүлээгээд дахин оролдоно уу.' });
    return;
  }

  const resultData = result?.data;
  if (resultData.status) {
    if (resultData.msg && resultData?.msg?.length > 0) {
      resultData.msg?.map((item) => {
        hideMsg || Notification.success({ title: item });
      });
    }
  } else if (
    resultData.msg &&
    resultData?.msg?.[0] !== '2FA_REQUIRED' &&
    resultData?.msg?.length > 0 &&
    !hideMsg
  ) {
    resultData.msg?.map((item) => {
      Notification.error({ desc: item });
    });
  }

  return resultData;
};

const callPatch = async (command, data, hideMsg = false) => {
  const result = await baseAxios.patch(command, data);

  if (result?.status === 403) {
    Notification.error({ desc: 'Хандах эрхгүй' });
    return;
  }

  if (!result) {
    Notification.error({ desc: 'Та интернет холболтоо шалгана уу!' });
    return;
  }

  if (result?.status !== 200 || !result.data) {
    Notification.error({ desc: 'Та түр хүлээгээд дахин оролдоно уу.' });
    return;
  }

  const resultData = result?.data;

  if (resultData.status) {
    if (resultData.msg && resultData?.msg?.length > 0) {
      resultData.msg?.map((item) => {
        hideMsg || Notification.success({ title: item });
      });
    }
  } else if (resultData.msg && resultData?.msg?.length > 0) {
    resultData.msg?.map((item) => Notification.error({ desc: item }));
  }

  return resultData;
};

const callDelete = async (command, hideMsg = false) => {
  const result = await baseAxios.delete(command);

  const resultData = result?.data;

  if (resultData.status) {
    if (resultData.msg && resultData?.msg?.length > 0) {
      hideMsg ||
        resultData.msg?.map((item) => Notification.success({ title: item }));
    }
  } else {
    resultData.msg?.map((item) => Notification.error({ desc: item }));
  }

  return resultData;
};

const apiList = {
  refData: '/ref/',
  signup: '/auth/',
  refreshToken: '/auth/refresh',
  authConfirm: '/auth/confirm',
  login: '/auth/login',
  logout: '/auth/logout',
  resetPassword: '/auth/password/reset',
  resetPasswordType: '/auth/password/reset/type',
  resetPasswordCheck: '/auth/password/reset/check',
  resetPasswordConfirm: '/auth/password/reset/confirm',
  danConnect: '/auth/dan',
  client: '/client/',
  disconnect: '/disconnect',
  user: '/user/',
  abroad: '/user/abroad',
  deviceRemind: '/user/remind',
  userDevice: '/user/device',
  twoFA: '/google/auth',
  google: '/google/',
  facebook: '/facebook/',
  apple: '/apple/',
};

export { apiList, callGet, callPost, callPatch, callDelete };
