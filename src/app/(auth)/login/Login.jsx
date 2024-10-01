'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi2';
import { RiSmartphoneLine, RiLockPasswordLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormElement, InputPassword, InputPrefix } from '@/ui';
import { apiList, callPost } from '@/axios/api';
import { setAuth, setRole, setToken } from '@/lib/auth';
import AuthLoyout from '@/layouts/AuthLoyout';

const schema = Yup.object({
  phone_number: Yup.string()
    .required('Утасны дугаараа оруулна уу.')
    .min(8, 'Хамгийн багадаа 8 тэмдэгт байх ёстой.')
    .max(8, 'Хамгийн ихдээ 8 тэмдэгт байх ёстой.'),
  password: Yup.string().required('Нууц үгээ оруулна уу.'),
  // .min(8, 'Хамгийн багадаа 8 тэмдэгт байх ёстой.')
  // .max(16, 'Хамгийн ихдээ 16 тэмдэгт байх ёстой.')
  // .matches(
  //   /^(?=.*[\W_])(?=.*\d)(?=.*[A-Z])[A-Za-z0-9!@#%^&*()_+{}[\]:;<>,.?/~`'"\-|=№₮¥$\\]*$/,
  //   'Таны нууц үг латин үсгээр, том үсэг, жижиг үсэг, тоо, тусгай тэмдэгт агуулсан байх ёстой.'
  // ),
});

const Login = ({ title }) => {
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

  const loginHandler = () => {
    setIsLoading(true);

    callPost(apiList.login, {
      phoneNumber: getValues('phone_number'),
      password: btoa(getValues('password')),
    })
      .then((res) => {
        if (res?.status) {
          const AUTH_STATUS = [
            'STATUS_INACTIVE',
            'STATUS_NORMAL',
            'STATUS_CONTRACT',
            'STATUS_UNPAID',
          ];

          // dispatch({
          //   type: 'AUTH',
          //   payload: {
          //     user: res.data.id,
          //   },
          // });

          setToken(res.data.token, res.data.exp);
          setRole(res.data.roleCode);

          setAuth(res.data.id);
          // setMenuAndPermissions();
          // setUserStatus(res.data.status);

          if (AUTH_STATUS.includes(res.data.status)) {
            if (res.data.roleCode === 'SUPER_ADMIN') {
              router.push('/admin/dashboard');
            } else {
              router.push('/dashboard');
            }
          } else if (res.data.status === 'STATUS_REGISTER') {
            router.push('/register/info');
          } else {
            router.push('/register/verification');
          }
        } else {
          setIsLoading(false);
        }
      })
      .catch(() => setIsLoading(false));
  };

  return (
    <AuthLoyout
      title={title}
      covers={[...Array(1)].fill('/images/cover_login.png')}
    >
      <form onSubmit={handleSubmit(loginHandler)}>
        <div className='flex flex-col gap-2'>
          <FormElement
            label='Утасны дугаар'
            message={errors.phone_number?.message}
          >
            {/* <input
              className={[
                errors.phone_number ? 'alert_input' : '',
                'rounded_input',
              ].join(' ')}
              {...register('phone_number')}
            /> */}

            <InputPrefix
              id='phone_number'
              before={<RiSmartphoneLine color='gray' />}
              alert={errors.phone_number}
              rounded
              register={register}
            />
          </FormElement>

          <FormElement
            label='Нууц үг'
            message={errors.password?.message}
          >
            <InputPassword
              id='password'
              before={<RiLockPasswordLine color='gray' />}
              alert={errors.password}
              rounded
              register={register}
            />
          </FormElement>
        </div>

        <div className='flex justify-between text-sm mt-1'>
          <Link href='/reset-password'>Нууц үгээ сэргээх үү?</Link>

          <Link
            className='flex items-center text-primary hover:opacity-60'
            href='/signup'
          >
            Бүртгүүлэх <HiChevronRight className='mt-[3.2px]' />
          </Link>
        </div>

        <button
          className='w-full rounded-full mt-8'
          type='submit'
          disabled={isLoading}
        >
          {isLoading ? <span className='load_spinner w-4' /> : 'Нэвтрэх'}
        </button>
      </form>
    </AuthLoyout>
  );
};

export default Login;
