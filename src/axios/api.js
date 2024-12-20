import baseAxios from './baseAxios';
import { Notification } from '@/ui';

const callGetExcelInstance = async (url, params) => {
  const result = await baseAxios.get(url, { responseType: 'blob', params });

  return result?.status === 200 ? result : null;
};

const callPromiseAllInstance = async (fetch) =>
  await axios.all(fetch).then(axios.spread((...responses) => responses));

const callGetList = async (url) => callGet(`${url}`);

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
    Notification.error({ desc: defaultMsg.error });
    return;
  }

  const resultData = result?.data;

  if (resultData.status) {
    if (resultData.msg && resultData?.msg?.length > 0) {
      resultData.msg?.map((message) => {
        hideMsg || Notification.success({ desc: null });
      });
    }
  } else if (
    resultData.msg &&
    resultData?.msg?.[0] !== '2FA_REQUIRED' &&
    resultData?.msg?.length > 0 &&
    !hideMsg
  ) {
    resultData.msg?.map((message) => {
      Notification.error({ desc: message });
    });
  }

  return resultData;
};

const callPut = async (url, params) => {
  const result = await baseAxios.put(url, params);

  if (result?.status === 403) {
    Notification.error({ desc: 'Хандах эрхгүй' });
    return;
  }

  if (!result) {
    Notification.error({ desc: 'Та интернет холболтоо шалгана уу!' });
    return;
  }

  if (result?.status !== 200 || !result.data) {
    Notification.error({ desc: defaultMsg.error });
    return;
  }

  const resultData = result?.data;

  if (resultData.status) {
    if (resultData.msg && resultData?.msg?.length > 0) {
      resultData.msg?.map((message) => {
        Notification.success({ desc: null });
      });
    }
  } else if (resultData.msg && resultData?.msg?.length > 0) {
    resultData.msg?.map((message) => {
      Notification.error({ desc: message });
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
    Notification.error({ desc: defaultMsg.error });
    return;
  }

  const resultData = result?.data;

  if (resultData.status) {
    if (resultData.msg && resultData?.msg?.length > 0) {
      resultData.msg?.map((message) => {
        hideMsg || Notification.success({ desc: null });
      });
    }
  } else if (resultData.msg && resultData?.msg?.length > 0) {
    resultData.msg?.map((message) => {
      Notification.error({ desc: message });
    });
  }

  return resultData;
};

const callDelete = async (command) => {
  const result = await baseAxios.delete(command);

  const resultData = result?.data;

  if (resultData.status) {
    if (resultData.msg && resultData?.msg?.length > 0) {
      resultData.msg?.map((message) => {
        Notification.success({ desc: null });
      });
    }
  } else {
    resultData.msg?.map((message) => {
      Notification.error({ desc: message });
    });
  }

  return resultData;
};

const callDeleteInstance = async (url, data) =>
  await baseAxios.delete(url, { data: data });

const apiList = {
  permissionMenu: '/user/menu/permission',
  auth: '/auth',
  login: '/auth/login',
  admin: '/admin',
  user: '/user',
  branch: '/branch',
  customer: '/customer',
  employee: '/employee',
  notification: '/notification',
};

export {
  apiList,
  callGetExcelInstance,
  callPromiseAllInstance,
  callGetList,
  callGet,
  callPost,
  callPut,
  callPatch,
  callDelete,
  callDeleteInstance,
};
