'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LuMenu, LuUser, LuPower } from 'react-icons/lu';
import { useBaseContext } from '@/context/BaseContext';
import Popover from '@/ui/Tooltip';
import { destroyTokens, getToken } from '@/lib/auth';

const Header = () => {
  const { isUser, setIsUser } = useBaseContext();

  const router = useRouter();
  const pathname = usePathname();

  const [token, setToken] = useState();
  const [shownToggle, setShownToggle] = useState(false);

  useEffect(() => {
    setToken(getToken());
  }, []);

  const modeHandler = (mode) => {
    if (mode === 'user') {
      setIsUser(true);
      pathname === '/' || router.push('/');
    } else {
      setIsUser(false);
    }
  };

  return (
    <header
      style={{ gridArea: 'header' }}
      className='background_img_1 fixed top-0 z-header w-full h-header flex justify-between items-center bg-white border-b border-white px-4 md:px-10'
    >
      <Link href='/'>
        <Image
          className='w-[100px] h-[32px] object-contain'
          src='/images/logo_name.png'
          alt='Logo'
          width={300}
          height={300}
          priority
        />
      </Link>

      {token ? (
        // <Popover
        //   content={
        //     <button
        //       className='first_btn h-auto rounded-full p-[10px] hover:bg-primary hover:text-gray-300'
        //       onClick={() => destroyTokens()}
        //     >
        //       <LuPower />
        //     </button>
        //   }
        // >
        //   <p className='text-nowrap'>Системээс гарах</p>
        // </Popover>

        <Link
          className='first_btn click_effect h-auto rounded-full p-2 hover:bg-primary hover:text-gray-300'
          href='/dashboard'
        >
          <LuUser size={18} />
        </Link>
      ) : (
        <div className='relative'>
          <button
            className='normal_btn p-2 sm:hidden'
            onClick={() => setShownToggle((prev) => !prev)}
          >
            <LuMenu size={20} />
          </button>

          <div
            className={
              shownToggle
                ? 'block absolute top-[116%] right-0 bg-white rounded shadow p-4'
                : 'hidden sm:flex items-center gap-6'
            }
          >
            <div
              className={[
                'flex flex-col gap-2 border border-dark_grey rounded-lg p-1 mb-3',
                'sm:flex-row sm:gap-1 sm:rounded-full sm:mb-0',
              ].join(' ')}
            >
              <button
                className={[
                  'w-[100px] h-auto rounded-full',
                  'sm:w-fit px-2',
                  isUser ? 'third_btn' : 'text_btn text-gray-500',
                ].join(' ')}
                onClick={() => modeHandler('user')}
              >
                Хэрэглэгч
              </button>

              <button
                className={[
                  'w-[100px] h-auto rounded-full',
                  'sm:w-fit px-2',
                  isUser ? 'text_btn text-gray-500' : 'third_btn',
                ].join(' ')}
                onClick={() => modeHandler('business')}
              >
                Бизнес
              </button>
            </div>

            {isUser ? (
              <Link
                className='like_btn block lg:hidden !w-full'
                href='https://onelink.to/5ttqsq'
                target='_blank'
              >
                Апп татах
              </Link>
            ) : (
              <div className='flex flex-col sm:flex-row gap-3'>
                <button
                  className='text_btn click_effect !w-full text-primary hover:opacity-60'
                  onClick={() => router.push('/login')}
                >
                  Нэвтрэх
                </button>
                <button onClick={() => router.push('/register')}>
                  Бүртгүүлэх
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
