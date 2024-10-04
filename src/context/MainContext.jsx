'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { apiList, callGet } from '@/axios/api';
import { getToken } from '@/lib/auth';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [reload, setReload] = useState(false);
  const [userInfo, setUserInfo] = useState();

  const fecthUserInfo = async () => {
    await callGet(`${apiList.user}/info`).then((res) => {
      setUserInfo(res.data);
    });
  };

  useEffect(() => {
    const token = getToken();

    if (token) {
      fecthUserInfo();
    }
  }, []);

  return (
    <MainContext.Provider
      value={{
        reload,
        userInfo,
        setReload,
        fecthUserInfo,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
