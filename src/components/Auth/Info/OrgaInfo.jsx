'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormElement, Switch } from '@/ui';
import { apiList, callPost } from '@/axios/api';
import BaseLayout from '@/layouts/BaseLayout';

const schema = Yup.object({
  registerNo: Yup.string()
    .required('Аж ахуй нэгжийн регистрээ оруулна уу')
    .matches(/^\d{7}$/, '7 оронтой тоо бичнэ үү'),
  firstName: Yup.string().required('Аж ахуй нэгжийн нэрээ оруулна уу'),
  email: Yup.string().required('И-Мэйлээ оруулна уу'),
});

const OrgaInfo = ({ data, changeStep }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [hasBranch, setHasBranch] = useState(false);

  const {
    formState: { errors },
    register,
    getValues,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (data?.hasBranch) {
      setHasBranch(true);
    }
  }, [data]);

  const continueOnClick = () => {
    setIsLoading(true);

    callPost(`${apiList.user}/info`, {
      ...getValues(),
      hasBranch,
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
            Байгууллагын мэдээлэл
          </h3>

          <form
            className='flex flex-col gap-2'
            onSubmit={handleSubmit(continueOnClick)}
          >
            <FormElement
              label='Аж ахуй нэгжийн регистр'
              message={errors.registerNo?.message}
            >
              <input
                className={[
                  'no_arrow rounded_input w-full',
                  errors.registerNo ? 'alert_input' : '',
                ].join(' ')}
                type='number'
                maxLength={7}
                {...register('registerNo')}
              />
            </FormElement>

            <FormElement
              label='Аж ахуй нэгжийн нэр'
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

            <label className='flex items-center gap-2 text-sm mt-2'>
              <Switch
                checked={hasBranch}
                onChange={(checked) => setHasBranch(checked)}
              />
              Салбартай эсэх
            </label>

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

export default OrgaInfo;
