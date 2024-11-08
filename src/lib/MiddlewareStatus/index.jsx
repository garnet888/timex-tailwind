'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useMainContext } from '@/context/MainContext';
import { getToken, getUserStatus } from '../auth';
import { checkAuthPage, unauthPages } from '../helper';
import FisrtLoginAlert from './Alerts/FisrtLogin';
import UnpaidAlert from './Alerts/Unpaid';
import NoServiceAlert from './Alerts/NoService';

const MiddlewareStatus = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { reload, setReload } = useMainContext();

  const [firstLoginAlert, setFirstLoginAlert] = useState(false);
  const [unpaidAlert, setUnpaidAlert] = useState(false);
  const [noServiceAlert, setNoServiceAlert] = useState(false);

  useEffect(() => {
    setReload(true);

    if (!checkAuthPage()) {
      window.location.replace('/login');
    }

    checkAuthPage() && setReload(false);
  }, [setReload]);

  useEffect(() => {
    if (getUserStatus() === 'STATUS_REGISTER' && pathname === '/dashboard') {
      router.push('/register/info');
    }

    if (
      getToken() &&
      ![
        'STATUS_NORMAL',
        'STATUS_CONTRACT',
        'STATUS_UNPAID',
        /* ======== SETTINGS [start] ======== */
        'STATUS_INFO',
        'STATUS_SERVICE',
        'STATUS_EMPLOYEE',
        'STATUS_TIMETABLE',
        'STATUS_ORDER',
        'STATUS_REGISTER',
        'STATUS_INACTIVE',
        /* ======== SETTINGS [end] ========== */
      ].includes(getUserStatus())
    ) {
      router.push('/register/verification');
    }

    if (getUserStatus() === 'STATUS_FIRST_LOGIN') {
      setFirstLoginAlert(true);
    }

    if (getUserStatus() === 'STATUS_UNPAID') {
      if (!unauthPages.includes(pathname) && pathname !== '/payment') {
        setUnpaidAlert(true);
      }
    }

    if (getUserStatus() === 'STATUS_CONTRACT') {
      setNoServiceAlert(true);
    }
  }, [router, pathname]);

  return (
    <>
      <FisrtLoginAlert
        visible={firstLoginAlert}
        onClose={() => setFirstLoginAlert(false)}
      />

      <UnpaidAlert
        visible={unpaidAlert}
        onClose={() => setUnpaidAlert(false)}
      />

      <NoServiceAlert
        visible={noServiceAlert}
        onClose={() => setNoServiceAlert(false)}
      />

      {reload || children}
    </>
  );
};

export default MiddlewareStatus;
