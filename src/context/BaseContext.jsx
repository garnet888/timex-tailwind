'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const BaseContext = createContext();

export const BaseProvider = ({ children }) => {
  const [reload, setReload] = useState(false);
  const [isUser, setIsUser] = useState();

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/login' || pathname === '/register') {
      setIsUser(false);
    } else if (pathname === '/') {
      setIsUser(true);
    }
  }, [pathname]);

  const renderChildren = () => {
    if (pathname === '/' || pathname === '/login' || pathname === '/register') {
      if (typeof isUser === 'boolean') {
        return children;
      } else {
        return (
          <div className='background_img_2 h-screen grid place-content-center text-2xl'>
            Уншиж байна...
          </div>
        );
      }
    } else {
      return children;
    }
  };

  return (
    <BaseContext.Provider
      value={{
        reload,
        isUser,
        setReload,
        setIsUser,
      }}
    >
      {renderChildren()}
    </BaseContext.Provider>
  );
};

export const useBaseContext = () => useContext(BaseContext);
