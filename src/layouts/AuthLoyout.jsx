'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft } from 'react-icons/fi';
import * as ReactSwiper from 'swiper/react';
import * as SwiperModules from 'swiper/modules';
import { v4 as uuid } from 'uuid';

const AuthLoyout = ({ children, title = '', covers, step, changeStep }) => {
  const router = useRouter();

  /* ======== Neg zurag bhad div-ee duurgej haragdahgui bga tul bichiw ======== */
  let COVERS = covers && [...covers];

  if (covers?.length === 1) {
    COVERS = [...covers, covers[0]];
  }
  /* ========================================================================== */

  const goBackHandler = () => {
    if (step === 1) {
      router.back();
    } else if (step > 1) {
      changeStep((prev) => prev - 1);
    }
  };

  return (
    <div className='h-screen grid lg:grid-cols-[4fr_2fr] xl:grid-cols-[6fr_2fr]'>
      <div className='hidden lg:grid place-content-center border-r'>
        {covers?.length > 0 ? (
          <ReactSwiper.Swiper
            modules={covers?.length === 1 || [SwiperModules.Autoplay]}
            autoplay={{ delay: 6000 }}
            speed={4000}
            allowTouchMove={false}
            loop
          >
            {COVERS?.map((item) => (
              <ReactSwiper.SwiperSlide key={uuid()}>
                <Image
                  className='w-full h-screen object-cover'
                  src={item}
                  alt='Logo'
                  width={1600}
                  height={1600}
                  priority
                />
              </ReactSwiper.SwiperSlide>
            ))}
          </ReactSwiper.Swiper>
        ) : (
          <Image
            className='w-[200px] h-[48px] object-contain mx-auto sm:mx-0'
            src='/images/logo_name.png'
            alt='Logo'
            width={300}
            height={300}
            priority
          />
        )}
      </div>

      <div className='relative flex flex-col justify-center bg-white px-8 md:px-48 lg:px-8'>
        <Link
          className='absolute top-8 lef-8'
          href='/'
        >
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
