import Link from 'next/link';
import Image from 'next/image';

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

      <p>Account icon</p>
    </header>
  );
};

export default Header;
