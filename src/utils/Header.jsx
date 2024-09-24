'use client';

import { useContext } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaRegUser, FaPowerOff } from 'react-icons/fa';
import Context from '@/context/Context';
import Popover from '@/ui/Popover';
import Tooltip from '@/ui/Tooltip';

const Header = () => {
  const { reload, isUser, setIsUser } = useContext(Context);

  const router = useRouter();
  const pathname = usePathname();

  const modeHandler = (mode) => {
    if (mode === 'user') {
      setIsUser(true);
      pathname === '/' || router.push('/');
    } else {
      setIsUser(false);
    }
  };

  if (!reload) {
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

        <div className='flex items-center gap-6'>
          <div className='flex gap-1 border border-dark_grey rounded-full p-1'>
            <button
              className={[
                isUser ? 'third_btn' : 'text_btn text-gray-500',
                'h-auto text-[14px] rounded-full px-2 py-0',
              ].join(' ')}
              onClick={() => modeHandler('user')}
            >
              Хэрэглэгч
            </button>

            <button
              className={[
                isUser ? 'text_btn text-gray-500' : 'third_btn',
                'h-auto text-[14px] rounded-full px-2 py-0',
              ].join(' ')}
              onClick={() => modeHandler('business')}
            >
              Бизнес
            </button>
          </div>

          {isUser ? (
            <div className='hidden md:block'>
              <Tooltip content={<button>Апп татах</button>}>
                <div className='text-nowrap px-2 py-1'>
                  <Link
                    className='flex items-center gap-2'
                    href='https://apps.apple.com/mn/app/timex-mn/id6470434425'
                    target='_blank'
                  >
                    <DiApple size={18} /> App Store
                  </Link>

                  <hr className='mt-2 mb-1' />

                  <Link
                    className='flex items-center gap-2'
                    href='https://play.google.com/store/apps/details?id=mn.timex.timex'
                    target='_blank'
                  >
                    <DiAndroid size={16} /> Google Store
                  </Link>
                </div>
              </Tooltip>
            </div>
          ) : (
            <div className='hidden md:flex gap-3'>
              {/* <Link
                className='first_btn click_effect h-auto rounded-full p-[10px] hover:bg-primary hover:text-gray-300'
                href='/admin'
              >
                <FaRegUser />
              </Link> */}

              {/* <Popover
                content={
                  <button className='first_btn h-auto rounded-full p-[10px] hover:bg-primary hover:text-gray-300'>
                    <FaPowerOff />
                  </button>
                }
              >
                <p className='text-nowrap'>Системээс гарах</p>
              </Popover> */}

              <button className='text_btn click_effect text-primary hover:opacity-60'>
                Нэвтрэх
              </button>
              <button>Бүртгүүлэх</button>
            </div>
          )}
        </div>
      </header>
    );
  }
};

export default Header;
