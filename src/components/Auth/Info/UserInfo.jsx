'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormElement } from '@/ui';
import { apiList, callPost } from '@/axios/api';
import BaseLayout from '@/layouts/BaseLayout';

const schema = Yup.object({
  firstName: Yup.string().required('Нэрээ оруулна уу'),
  lastName: Yup.string().required('Овогоо оруулна уу'),
  registerNo: Yup.string()
    .required('Регистрийн дугаараа оруулна уу')
    .matches(/^[А-Яа-яӨҮ]{2}\d{8}$/, 'Зөв форматаар бичнэ үү'),
  email: Yup.string().required('И-Мэйлээ оруулна уу'),
});

const UserInfo = ({ changeStep }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    formState: { errors },
    register,
    getValues,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const continueOnClick = () => {
    setIsLoading(true);

    callPost(`${apiList.user}/info`, {
      ...getValues(),
      hasBranch: false,
    }).then((res) => {
      if (res.status) {
        router.push('/register/verification');
      } else {
        setIsLoading(false);
      }
    });
  };

  return (
    <BaseLayout shownBackground>
      <div className='w-full h-full grid place-content-center'>
        <div className='relative sm:w-[400px] bg-white rounded-3xl shadow p-4.5 mx-4'>
          <h3 className='w-full flex justify-center items-center gap-4 mb-4.5'>
            <button
              className='normal_btn sm:absolute sm:left-4.5 grid place-content-center p-2'
              onClick={() => changeStep(1)}
            >
              <FiArrowLeft color='var(--primary-color)' />
            </button>
            Хувийн мэдээлэл
          </h3>

          <form
            className='flex flex-col gap-2'
            onSubmit={handleSubmit(continueOnClick)}
          >
            <FormElement
              label='Овог'
              message={errors.lastName?.message}
            >
              <input
                className={[
                  'rounded_input w-full',
                  errors.lastName ? 'alert_input' : '',
                ].join(' ')}
                {...register('lastName')}
              />
            </FormElement>

            <FormElement
              label='Нэр'
              message={errors.firstName?.message}
            >
              <input
                className={[
                  'rounded_input w-full',
                  errors.firstName ? 'alert_input' : '',
                ].join(' ')}
                {...register('firstName')}
              />
            </FormElement>

            <FormElement
              label='Регистрийн дугаар'
              message={errors.registerNo?.message}
            >
              <input
                className={[
                  'rounded_input w-full',
                  errors.registerNo ? 'alert_input' : '',
                ].join(' ')}
                {...register('registerNo')}
              />
            </FormElement>

            <FormElement
              label='И-Мэйл'
              message={errors.email?.message}
            >
              <input
                className={[
                  'rounded_input w-full',
                  errors.email ? 'alert_input' : '',
                ].join(' ')}
                {...register('email')}
              />
            </FormElement>

            <button
              className='w-full rounded-full mt-6'
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? (
                <span className='load_spinner w-4' />
              ) : (
                'Үргэлжлүүлэх'
              )}
            </button>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default UserInfo;
