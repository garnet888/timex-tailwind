'use client';

import { useEffect } from 'react';
import { useMainContext } from '@/context/MainContext';
import { checkAuthPage } from './helper';

const MiddlewareStatus = ({ children }) => {
  const { reload, setReload } = useMainContext();

  useEffect(() => {
    setReload(true);

    if (!checkAuthPage()) {
      window.location.replace('/login');
    }

    checkAuthPage() && setReload(false);
  }, [setReload]);

  return reload || children;
};

export default MiddlewareStatus;
