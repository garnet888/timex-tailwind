'use client';

import { useEffect, useState } from 'react';
import { getRole } from '@/lib/auth';
import ChooseType from '@/components/Auth/Info/ChooseType';
import UserInfo from '@/components/Auth/Info/UserInfo';
import OrgaInfo from '@/components/Auth/Info/OrgaInfo';
import { apiList, callGet } from '@/axios/api';

const Info = () => {
  const role = getRole();

  const [data, setData] = useState();
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');

  let _role = role;

  if (!role || role === 'undefined' || role === 'null') {
    _role = null;
  }

  useEffect(() => {
    if (_role) {
      setStep(2);
    }

    if (_role) {
      if (role === 'INDIVIDUAL_ADMIN') {
        setUserType('user');
      } else {
        setUserType('orga');
      }
    }

    callGet(`${apiList.user}/register`).then((res) => {
      if (res?.status) {
        setData(res.data);
      }
    });
  }, [_role]);

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <ChooseType
            userType={userType}
            setUserType={setUserType}
            changeStep={setStep}
          />
        );

      case 2:
        if (userType === 'user') {
          return <UserInfo data={data} changeStep={setStep} />;
        }
        if (userType === 'orga') {
          return <OrgaInfo data={data} changeStep={setStep} />;
        }

      default:
        return;
    }
  };

  return renderContent();
};

export default Info;
