'use client';

import { createContext, useContext, useState } from 'react';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [reload, setReload] = useState(false);

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
