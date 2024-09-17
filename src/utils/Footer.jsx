import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { TbPhone, TbMail } from 'react-icons/tb';

const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE;

const tablet_stl = 'md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-6';
const desktop_stl = 'lg:flex lg:flex-row lg:justify-between lg:gap-12';

const Footer = () => {
  return (
    <footer
      style={{ gridArea: 'footer' }}
      className='shadow-footer px-8 xl:px-[120px] py-8'
    >
      <ul
        className={[
          'flex flex-col gap-6 text-sm',
          tablet_stl,
          desktop_stl,
        ].join(' ')}
      >
        <li className='flex flex-col gap-1 md:gap-4 lg:gap-6 text-primary text-sm'>
          <Image
            className='w-[100px] h-[40px] object-contain'
            src='/images/logo_name.png'
            alt='Logo'
            width={300}
            height={300}
            priority
          />

          <p className='text-nowrap'>Цаг хугацаа бол Garnet</p>
        </li>

        <li>
          <b>Холбоосууд</b>

          <ul className='flex flex-col gap-1 text-nowrap mt-2'>
            <li>
              <Link href='#'>Системийн танилцуулга</Link>
            </li>
            <li>
              <Link href='#'>Заавар</Link>
            </li>
            <li>
              <Link href='#'>Үйчилгээний нөхцөл</Link>
            </li>
            <li>
              <Link href='#'>Нууцлалын бодлого</Link>
            </li>
          </ul>
        </li>

        <li>
          <b>Холбоо барих</b>

          <ul className='flex flex-col gap-2 mt-2'>
            <li className='flex items-start gap-2'>
              <span className='mt-1'>
                <HiOutlineLocationMarker color='#6c30ed' size={20} />
              </span>
              <p>
                Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Реженси резиденс,
                201 тоот
              </p>
            </li>

            <li className='flex items-center gap-2'>
              <span>
                <TbPhone color='#6c30ed' size={20} />
              </span>
              <p>{CONTACT_PHONE}</p>
            </li>

            <li className='flex items-center gap-2'>
              <span>
                <TbMail color='#6c30ed' size={20} />
              </span>
              <p>info@timex.mn</p>
            </li>
          </ul>
        </li>

        <li>
          <b>Апп татах</b>

          <div className='flex gap-6 mt-2'>
            <Image
              className='w-[100px] h-[100px] object-contain'
              src='/images/app_qr_code.png'
              alt='Logo'
              width={1000}
              height={1000}
              priority
            />

            <div className='flex flex-col justify-between'>
              <Link
                href='https://play.google.com/store/apps/details?id=mn.timex.timex'
                target='_blank'
              >
                <Image
                  className='w-[148px] h-[36px] lg:w-[320px] xl:w-[148px]  object-contain'
                  src='/images/store_google.png'
                  alt='Logo'
                  width={500}
                  height={500}
                  priority
                />
              </Link>

              <Link
                href='https://apps.apple.com/mn/app/timex-mn/id6470434425'
                target='_blank'
              >
                <Image
                  className='w-[148px] h-[36px] lg:w-[320px] xl:w-[148px]  object-contain'
                  src='/images/store_apple.png'
                  alt='Logo'
                  width={500}
                  height={500}
                  priority
                />
              </Link>
            </div>
          </div>
        </li>
      </ul>

      <hr className='my-6' />

      <div className='flex flex-col md:flex-row justify-between items-center'>
        <p className='text-center mb-4 md:mb-0'>
          &copy; Copyright {1900 + new Date().getYear()}
        </p>

        <div className='flex flex-col md:flex-row items-center gap-2'>
          Биднийг дагаарай
          <div className='flex gap-4 md:gap-2'>
            <Link
              className='bg-[#1877F2] text-white rounded-full px-[12px] py-2'
              href='https://www.facebook.com/Timex.mn'
              target='_blank'
            >
              fb.com/timexmn
            </Link>
            <Link
              className='text-white rounded-full px-[12px] py-2'
              style={{
                background:
                  'radial-gradient(92.18% 99.11% at 26.56% 107.7%, #FD5 0%, #FD5 10%, #FF543E 50%, #C837AB 100%), #FFF',
              }}
              href='https://www.instagram.com/timex.mn'
              target='_blank'
            >
              @timex.mn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
