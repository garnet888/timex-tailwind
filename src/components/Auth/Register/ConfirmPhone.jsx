import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CgUndo } from 'react-icons/cg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import VerificationInput from 'react-verification-input';
import { FormElement } from '@/ui';
import { apiList, callPost } from '@/axios/api';

const schema = Yup.object({
  code: Yup.string()
    .required('Баталгаажуулах кодоо оруулна уу')
    .matches(/^\d{6}$/, '6 ширхэг тоо байх ёстой'),
});

const ConfirmPhone = ({ userID, phone }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (timeLeft === 0) return;

    const _interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(_interval);
  }, [timeLeft]);

  const {
    formState: { errors },
    setValue,
    setError,
    getValues,
    clearErrors,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const onChangeHandler = (val) => {
    const is_number = /^\d+$/.test(val);

    if (val && !is_number) {
      setError('code', { message: 'Зөвхөн тоо оруулна уу!' });
    } else {
      clearErrors();
      setValue('code', val);
    }
  };

  const getCodeAgain = () => {
    callPost(
      `${apiList.auth}/send/unauth`,
      {
        id: userID,
        type: 'register',
      },
      true
    ).then((res) => {
      if (res?.status) {
        setValue('code', '');
        setTimeLeft(120);
      }
    });
  };

  const confirmHandler = () => {
    setIsLoading(true);

    callPost(`${apiList.auth}/phone/confirm`, {
      id: userID,
      code: getValues('code'),
    }).then((res) => {
      if (res?.status) {
        router.push('/login');
      } else {
        setValue('code', '');
      }

      setIsLoading(false);
    });
  };

  return (
    <form
      className='flex flex-col gap-2'
      onSubmit={handleSubmit(confirmHandler)}
    >
      <FormElement
        label='Баталгаажуулах код'
        message={errors.code?.message}
      >
        {/* <InputPrefix
          id='code'
          before={<RiKeyboardLine color='gray' />}
          alert={errors.code}
          rounded
          register={register}
        /> */}

        <center>
          <VerificationInput
            classNames={{
              container: '',
              character:
                'grid place-content-center border-none w-[58px] bg-light_grey text-dark text-2xl rounded-full p-0 m-0',
              characterInactive: 'text-dark_grey',
              characterSelected: 'outline-[3.2px] outline-primary/60',
            }}
            value={getValues('code')}
            placeholder='-'
            validChars='0-9'
            autoFocus
            onChange={onChangeHandler}
          />

          <p className='text-sm my-4'>
            Таны <b>{phone}</b> дугаар луу 6 орон бүхий баталгаажуулах код
            илгээлээ
          </p>

          {timeLeft > 0 ? (
            <b>{formatTime()}</b>
          ) : (
            <button
              className='text_btn text-primary disabled:bg-white'
              type='button'
              onClick={getCodeAgain}
            >
              <CgUndo size={18} />
              Дахин код авах
            </button>
          )}
        </center>
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
