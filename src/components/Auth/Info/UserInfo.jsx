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
        <div className='relative sm:w-[400px] bg-white rounded-3xl shadow p-[18px] mx-4'>
          <h3 className='w-full flex justify-center items-center gap-4 mb-[18px]'>
            <button
              className='normal_btn sm:absolute sm:left-[18px] grid place-content-center p-2'
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
            <FormElement label='Овог' message={errors.lastName?.message}>
              <input
                className={[
                  errors.lastName ? 'alert_input' : '',
                  'rounded_input w-full',
                ].join(' ')}
                {...register('lastName')}
              />
            </FormElement>

            <FormElement label='Нэр' message={errors.firstName?.message}>
              <input
                className={[
                  errors.firstName ? 'alert_input' : '',
                  'rounded_input w-full',
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
                  errors.registerNo ? 'alert_input' : '',
                  'rounded_input w-full',
                ].join(' ')}
                {...register('registerNo')}
              />
            </FormElement>

            <FormElement label='И-Мэйл' message={errors.email?.message}>
              <input
                className={[
                  errors.email ? 'alert_input' : '',
                  'rounded_input w-full',
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
