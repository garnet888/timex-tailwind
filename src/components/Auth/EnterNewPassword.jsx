import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RiKeyboardLine, RiLockPasswordLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormElement, InputPassword, InputPrefix } from '@/ui';
import { apiList, callPost } from '@/axios/api';

const schema = Yup.object({
  code: Yup.string()
    .required('Баталгаажуулах кодоо оруулна уу')
    .matches(/^\d{6}$/, '6 ширхэг тоо байх ёстой'),
  password: Yup.string()
    .required('Нууц үгээ оруулна уу')
    .min(6, 'Хамгийн багадаа 6 тэмдэгт байх ёстой')
    .matches(
      /^(?=.*[\W_])(?=.*\d)(?=.*[A-Z])[A-Za-z0-9!@#%^&*()_+{}[\]:;<>,.?/~`'"\-|=№₮¥$\\]*$/,
      'Таны нууц үг латин үсгээр, ядаж 1 том үсэг, жижиг үсэг, тоо, тусгай тэмдэгт агуулсан байх ёстой'
    ),
  rePassword: Yup.string()
    .required('Нууц үгээ давтан оруулна уу')
    .oneOf([Yup.ref('password')], 'Нууц үг таарахгүй байна'),
});

const EnterNewPassword = ({ phone }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    formState: { errors },
    register,
    getValues,
    resetField,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendHandler = () => {
    setIsLoading(true);

    setIsLoading(true);

    callPost(`${apiList.auth}/reset/password/confirm`, {
      code: getValues('code'),
      password: btoa(getValues('password')),
      passwordMatch: btoa(getValues('rePassword')),
      phoneNumber: phone,
    }).then((res) => {
      if (res.status) {
        router.push('/login');
      } else {
        resetField();
      }

      setIsLoading(false);
    });
  };

  return (
    <form
      className='flex flex-col gap-2'
      onSubmit={handleSubmit(sendHandler)}
    >
      <p className='text-stone-500 text-sm mb-2'>
        Таны бүртгэлтэй утасны дугаар луу баталгаажуулах код илгээгдлээ.
      </p>

      <FormElement
        label='Баталгаажуулах код'
        message={errors.code?.message}
      >
        <InputPrefix
          id='code'
          before={<RiKeyboardLine color='gray' />}
          alert={errors.code}
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

      <FormElement
        label='Нууц үг давтах'
        message={errors.rePassword?.message}
      >
        <InputPassword
          id='rePassword'
          before={<RiLockPasswordLine color='gray' />}
          alert={errors.rePassword}
          rounded
          register={register}
        />
      </FormElement>

      <button
        className='w-full rounded-full mt-6'
        type='submit'
        disabled={isLoading}
      >
        {isLoading ? <span className='load_spinner w-4' /> : 'Илгээх'}
      </button>
    </form>
  );
};

export default EnterNewPassword;
