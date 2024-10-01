'use client';

import { useState } from 'react';
import AuthLoyout from '@/layouts/AuthLoyout';
import EnterNewPassword from '@/components/Auth/EnterNewPassword';
import EnterPhone from '@/components/Auth/EnterPhone';

const ResetPassword = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');

  const getTitle = () => {
    switch (step) {
      case 1:
        return 'Нууц үг сэргээх';
      case 2:
        return 'Шинэ нууц үг';
    }
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <EnterPhone
            setPhone={setPhone}
            changeStep={setStep}
          />
        );

      case 2:
        return <EnterNewPassword phone={phone} />;

      default:
        return;
    }
  };

  return (
    <AuthLoyout
      title={getTitle()}
      step={step}
      changeStep={setStep}
    >
      {renderContent()}
    </AuthLoyout>
  );
};

export default ResetPassword;
