'use client';

import { useState } from 'react';
import AuthLoyout from '@/layouts/AuthLoyout';
import RegisterStep from '@/components/Auth/Register/RegisterStep';
import ConfirmPhone from '@/components/Auth/Register/ConfirmPhone';

const Register = () => {
  const [step, setStep] = useState(1);
  const [userID, setUserID] = useState('');
  const [phone, setPhone] = useState('');

  const getTitle = () => {
    switch (step) {
      case 1:
        return 'Бүртгүүлэх';
      case 2:
        return 'Утасны дугаар баталгаажуулах';
    }
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <RegisterStep
            setUserID={setUserID}
            setPhone={setPhone}
            changeStep={setStep}
          />
        );

      case 2:
        return <ConfirmPhone userID={userID} phone={phone} />;

      default:
        return;
    }
  };

  return (
    <AuthLoyout
      title={getTitle()}
      covers={[...Array(1)].fill('/images/cover_register.png')}
      step={step}
      changeStep={setStep}
    >
      {renderContent()}
    </AuthLoyout>
  );
};

export default Register;
