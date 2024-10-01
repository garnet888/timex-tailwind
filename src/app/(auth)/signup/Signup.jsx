'use client';

import { useState } from 'react';
import AuthLoyout from '@/layouts/AuthLoyout';
import Register from '@/components/Auth/Register';
import ConfirmPhone from '@/components/Auth/ConfirmPhone';

const Signup = () => {
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
          <Register
            setUserID={setUserID}
            setPhone={setPhone}
            changeStep={setStep}
          />
        );

      case 2:
        return (
          <ConfirmPhone
            userID={userID}
            phone={phone}
          />
        );

      default:
        return;
    }
  };

  return (
    <AuthLoyout
      title={getTitle()}
      covers={[...Array(1)].fill('/images/cover_signup.png')}
      step={step}
      changeStep={setStep}
    >
      {renderContent()}
    </AuthLoyout>
  );
};

export default Signup;
