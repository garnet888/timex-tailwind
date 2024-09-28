'use client';

import { useEffect } from 'react';
import { destroyTokens } from '@/lib/auth';

const Logout = () => {
  useEffect(() => {
    destroyTokens();
  }, []);

  return <></>;
};

export default Logout;
