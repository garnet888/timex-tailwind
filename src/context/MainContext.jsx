'use client';

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { apiList, callGet } from '@/axios/api';
import Reducers from './Reducers';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const initialState = { auth: {}, menus: [], permissions: {} };
  const [state, dispatch] = useReducer(Reducers, initialState);

  const [reload, setReload] = useState(false);

  const fetchMenu = async () => {
    // const result = await callGet(apiList.permissionMenu);
    // console.log('MENUS', result);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <MainContext.Provider
      value={{
        reload,
        setReload,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
