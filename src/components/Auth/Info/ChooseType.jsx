'use client';

import { useState } from 'react';
import Image from 'next/image';
import { destroyTokens } from '@/lib/auth';
import { Warning } from '@/ui';
import AuthLoyout from '@/layouts/AuthLoyout';

const ChooseType = ({ userType, setUserType, changeStep }) => {
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [shownAlert, setShownWarning] = useState(false);

  const continueOnClick = () => {
    if (userType === 'user' || userType === 'orga') {
      changeStep(2);
      setVisibleAlert(false);
    } else {
      setVisibleAlert(true);
    }
  };

  return (
    <AuthLoyout title='Шинэ хэрэглэгч'>
      <Warning
        text='Та гарахдаа итгэлтэй байна уу?'
        visible={shownAlert}
        noOnClick={() => setShownWarning(false)}
        yesOnClick={() => destroyTokens()}
      />

      <p className='text-center text-sm -mt-6'>
        Та бүртгүүлэх төрлөө сонгоно уу.
      </p>

      <div className='flex flex-col gap-4 mt-6 mb-12'>
        <div className='flex justify-between gap-4'>
          <button
            className={[
              userType === 'orga' ? 'border-2 border-primary' : '',
              'normal_btn h-auto flex flex-col shadow px-3 pt-2 pb-3',
            ].join(' ')}
            onClick={() => setUserType('orga')}
          >
            <Image
              className='w-[108px] h-[108px] object-contain'
              src='/images/company.png'
              alt='company'
              width={500}
              height={500}
              priority
            />

            <p
              className={[
                userType === 'orga' ? 'text-primary' : '',
                'text-dark text-sm font-medium',
              ].join(' ')}
            >
              Байгууллага
            </p>
          </button>

          <button
            className={[
              userType === 'user' ? 'border-2 border-primary' : '',
              'normal_btn h-auto flex flex-col shadow px-3 pt-2 pb-3',
            ].join(' ')}
            onClick={() => setUserType('user')}
          >
            <Image
              className='w-[108px] h-[108px] object-contain'
              src='/images/user.png'
              alt='user'
              width={500}
              height={500}
              priority
            />

            <p
              className={[
                userType === 'user' ? 'text-primary' : '',
                'text-dark text-sm font-medium',
              ].join(' ')}
            >
              Хувь хүн
            </p>
          </button>
        </div>

        {visibleAlert && (
          <p className='text-red-500 text-center'>Төрлөө сонгоно уу</p>
        )}
      </div>

      <div className='flex flex-col items-center gap-4'>
        <button className='w-full rounded-full' onClick={continueOnClick}>
          Үргэлжлүүлэх
        </button>

        <button
          className='text_btn font-light'
          onClick={() => setShownWarning(true)}
        >
          Бүртгэлээс гарах
        </button>
      </div>
    </AuthLoyout>
  );
};

export default ChooseType;
