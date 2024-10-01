import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'Хуудас олдсонгүй' };

const NotFound = () => {
  return (
    <main className='grid place-content-center text-center sm:text-start px-6 mt-36'>
      <Link href='/'>
        <Image
          className='w-[112px] h-[38px] object-contain mx-auto sm:mx-0'
          src='/images/logo_name.png'
          alt='Logo'
          width={300}
          height={300}
          priority
        />
      </Link>

      <p className='text-red-500 text-2xl font-medium mt-2'>404!</p>
      <p className='text-zinc-500 text-xl'>Таны хандсан хуудас байхгүй байна</p>
    </main>
  );
};

export default NotFound;
