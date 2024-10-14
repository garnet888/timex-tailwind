import { useState } from 'react';
import { RiSmartphoneLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormElement, InputPrefix } from '@/ui';
import { apiList, callPost } from '@/axios/api';

const schema = Yup.object({
  phone_number: Yup.string()
    .required('Утасны дугаараа оруулна уу')
    .matches(/^\d{8}$/, '8 ширхэг тоо байх ёстой'),
});

const EnterPhone = ({ setPhone, changeStep }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    formState: { errors },
    register,
    getValues,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendHandler = () => {
    setIsLoading(true);

    callPost(`${apiList.auth}/reset/password`, {
      phoneNumber: getValues('phone_number'),
    }).then((res) => {
      if (res.status) {
        setPhone(getValues('phone_number'));
        changeStep(2);
      }

      setIsLoading(false);
    });
  };

  return (
    <form
      className='flex flex-col gap-2'
      onSubmit={handleSubmit(sendHandler)}
    >
      <FormElement
        label='Та бүртгэлтэй утасны дугаараа оруулна уу'
        message={errors.phone_number?.message}
      >
        <InputPrefix
          id='phone_number'
          before={<RiSmartphoneLine color='gray' />}
          alert={errors.phone_number}
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

export default EnterPhone;
