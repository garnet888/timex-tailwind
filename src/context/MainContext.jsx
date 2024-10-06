'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { apiList, callGet } from '@/axios/api';
import { getToken } from '@/lib/auth';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [reload, setReload] = useState(false);
  const [userInfo, setUserInfo] = useState();

  const fecthUserInfo = useCallback(() => {
    const token = getToken();

    if (token) {
      callGet(`${apiList.user}/info`).then((res) => {
        setUserInfo(res.data);
      });
    }
  }, []);

  return (
    <MainContext.Provider
      value={useMemo(
        () => ({
          reload,
          userInfo,
          setReload,
          fecthUserInfo,
        }),
        [reload, userInfo, setReload, fecthUserInfo]
      )}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
