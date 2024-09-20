import Link from 'next/link';
import Image from 'next/image';
import { PiAirplane, PiCaretDoubleLeft } from 'react-icons/pi';
import { TbLogout } from 'react-icons/tb';
import { v4 as uuid } from 'uuid';

const Sidebar = ({ smallMenu, setSmallMenu }) => {
  return (
    <aside
      className={[
        'width_effect sticky top-0 h-screen flex items-center px-4 py-6',
        smallMenu ? 'w-[100px]' : 'w-[300px]',
      ].join(' ')}
      style={{ gridArea: 'sidebar' }}
    >
      <nav className='tmx_scollbar w-full h-full overflow-auto bg-white rounded-xl shadow-sidebar'>
        <div
          className={[
            'sticky top-0 flex items-center bg-white p-3 shadow',
            smallMenu ? 'justify-center' : 'justify-between',
          ].join(' ')}
        >
          <Link href='/'>
            <Image
              className={[
                'w-[100px] object-contain',
                smallMenu ? 'h-[30px]' : 'h-[36px]',
              ].join(' ')}
              src={smallMenu ? '/images/logo.png' : '/images/logo_name.png'}
              alt='Logo'
              width={300}
              height={300}
              priority
            />
          </Link>

          <button
            className={[
              'normal_btn p-0 m-0 w-[28px] h-[28px] grid place-content-center',
              smallMenu && ' absolute -right-[1px]',
            ].join(' ')}
            onClick={() => setSmallMenu((prev) => !prev)}
          >
            <PiCaretDoubleLeft
              style={{ transform: `scaleX(${smallMenu ? -1 : 1})` }}
            />
          </button>
        </div>

        <div className='text-[14px]'>
          <ul className='flex flex-col gap-2 px-2 py-1'>
            {[...Array(80)].map((_, idx) => (
              <li key={uuid()}>
                <Link
                  className='w-full flex items-center gap-[10px] rounded p-[6px] hover:bg-primary hover:text-white'
                  href='#'
                >
                  <PiAirplane size={18} />
                  Menu item {idx + 1}
                </Link>
              </li>
            ))}
          </ul>

          <div className='sticky bottom-0 flex flex-col gap-4 bg-white shadow p-4'>
            <button className='text_btn flex items-center gap-[10px] w-full text-start hover:text-red-500'>
              <TbLogout color='red' size={18} />
              Гарах
            </button>

            <hr />

            <Link className='flex items-center gap-2' href='#'>
              <Image
                className='w-[32px] h-[32px] object-cover rounded-full'
                src='/images/logo.png'
                alt='Avatar'
                width={100}
                height={100}
                priority
              />

              <p>Garnet</p>
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
