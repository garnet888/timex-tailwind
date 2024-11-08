'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { apiList, callGet } from '@/axios/api';
import { getToken, setUserStatus } from '@/lib/auth';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [reload, setReload] = useState(false);

  const [userInfo, setUserInfo] = useState();

  const fecthUserInfo = useCallback(() => {
    if (getToken()) {
      callGet(`${apiList.user}/info`).then((res) => {
        if (res?.status) {
          setUserInfo(res.data);
        }
      });
    }
  }, []);

  const fetchUserStatus = useCallback(() => {
    if (getToken()) {
      callGet(`${apiList.user}/status`).then((res) => {
        if (res?.status) {
          setUserStatus(res.data.status);
        }
      });
    }
  }, []);

  useEffect(() => {
    fetchUserStatus();
  }, [fetchUserStatus]);

  return (
    <MainContext.Provider
      value={useMemo(
        () => ({
          reload,
          userInfo,
          setReload,
          fecthUserInfo,
          fetchUserStatus,
        }),
        [reload, userInfo, setReload, fecthUserInfo, fetchUserStatus]
      )}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
