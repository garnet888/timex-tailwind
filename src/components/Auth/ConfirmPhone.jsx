import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FormElement, InputPrefix } from '@/ui';

const schema = Yup.object({
  code: Yup.string()
    .required('Баталгаажуулах кодоо оруулна уу.')
    .matches(/^\d{6}$/, '6 ширхэг тоо байх ёстой.'),
});

const ConfirmPhone = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    formState: { errors },
    register,
    getValues,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const confirmHandler = () => {};

  return (
    <form
      className='flex flex-col gap-2'
      onSubmit={handleSubmit(confirmHandler)}
    >
      <FormElement
        label='Баталгаажуулах код'
        message={errors.code?.message}
      >
        <InputPrefix
          id='code'
          before={<RiLockPasswordLine color='gray' />}
          alert={errors.code}
          rounded
          register={register}
        />
      </FormElement>

      <button
        className='w-full rounded-full mt-6'
        type='submit'
        disabled={isLoading}
      >
        {isLoading ? <span className='load_spinner w-4' /> : 'Баталгаажуулах'}
      </button>
    </form>
  );
};

export default ConfirmPhone;
