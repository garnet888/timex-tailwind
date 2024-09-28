'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft } from 'react-icons/fi';

const AuthLoyout = ({ children, title = '', step, changeStep }) => {
  const router = useRouter();

  const goBackHandler = () => {
    if (step === 1) {
      router.back();
    } else if (step > 1) {
      changeStep((prev) => prev - 1);
    }
  };

  return (
    <div className='h-screen grid sm:grid-cols-2 md:grid-cols-[3.4fr_2fr] lg:grid-cols-[4fr_2fr] xl:grid-cols-[6fr_2fr]'>
      <div className='hidden sm:block h-full bg-purple-500'></div>

      <div className='relative flex flex-col justify-center bg-white px-8'>
        <Link className='absolute top-8 lef-8' href='/'>
          <Image
            className='w-[100px] h-[32px] object-contain'
            src='/images/logo_name.png'
            alt='Logo'
            width={300}
            height={300}
            priority
          />
        </Link>

        <h3 className='relative h-8 flex justify-center items-center font-semibold mb-8'>
          {step > 0 && step < 4 && (
            <button
              className='normal_btn absolute left-0 grid place-content-center p-2'
              onClick={goBackHandler}
            >
              <FiArrowLeft color='var(--primary-color)' />
            </button>
          )}

          {title}
        </h3>

        {children}
      </div>
    </div>
  );
};

export default AuthLoyout;
