import Link from 'next/link';
import Image from 'next/image';
import { FaRegUser, FaPowerOff } from 'react-icons/fa';
import Tooltip from '@/ui/Tooltip';
import Popover from '@/ui/Popover';

const Header = () => {
  return (
    <header
      style={{ gridArea: 'header' }}
      className='background_img_1 fixed top-0 z-header w-full h-header flex justify-between items-center bg-white border-b border-white px-10'
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

      <div className='flex gap-1'>
        <Tooltip
          content={
            <div className='bg-primary text-white rounded-full p-[10px] hover:text-gray-300'>
              <FaRegUser />
            </div>
          }
        >
          <div className='flex flex-col gap-1 text-nowrap px-2 py-2'>
            <Link className='rounded px-1 hover:bg-gray-200' href='/'>
              Тохиргоо
            </Link>

            <Link
              className='text-orange-400 rounded px-1 hover:bg-gray-200'
              href='/'
            >
              Гарах
            </Link>
          </div>
        </Tooltip>

        <Popover
          content={
            <div className='bg-primary text-white rounded-full p-[10px] hover:text-gray-300'>
              <FaPowerOff />
            </div>
          }
        >
          <p className='text-nowrap'>Системээс гарах</p>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
