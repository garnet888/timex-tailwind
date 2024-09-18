import Link from 'next/link';
import Image from 'next/image';
import { FaRegUser, FaPowerOff } from 'react-icons/fa';
import Popover from '@/ui/Popover';

const Header = () => {
  return (
    <header
      style={{ gridArea: 'header' }}
      className='background_img_1 fixed top-0 z-header w-full h-header flex justify-between items-center bg-white border-b border-white px-10'
    >
      <Link href='/home'>
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
        <Link
          className='first_btn click_effect h-auto rounded-full p-[10px] hover:bg-primary hover:text-gray-300'
          href='/admin'
        >
          <FaRegUser />
        </Link>

        <Popover
          content={
            <button className='first_btn h-auto rounded-full p-[10px] hover:bg-primary hover:text-gray-300'>
              <FaPowerOff />
            </button>
          }
        >
          <p className='text-nowrap'>Системээс гарах</p>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
