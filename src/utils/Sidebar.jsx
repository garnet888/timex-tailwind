import Link from 'next/link';
import Image from 'next/image';
import { PiAirplane } from 'react-icons/pi';
import { v4 as uuid } from 'uuid';
import { DoubleLeft, Logout, Notification } from './icons';

const Sidebar = ({ smallMenu, setSmallMenu }) => {
  let badge = 1;

  const renderBadge = () => {
    if (badge) {
      return (
        <p className='absolute -top-[6px] -right-[10px] h-[14px] grid place-content-center bg-white border border-light_grey text-[10px] rounded-[100px] px-1 py-px'>
          9+
        </p>
      );
    }
  };

  return (
    <aside
      style={{ gridArea: 'sidebar' }}
      className={[
        smallMenu ? 'w-small_menu' : 'w-menu',
        'hidden sm:block width_effect sticky top-0 h-screen p-[20px]',
      ].join(' ')}
    >
      <nav className='relative w-full h-full bg-white rounded-2xl'>
        <div
          className={[
            smallMenu ? 'w-[80px]' : 'w-[260px]',
            'width_effect fixed top-[20px] h-[60px] flex justify-between items-center rounded-t-2xl shadow px-2',
          ].join(' ')}
        >
          <Link
            className='flex items-center text-nowrap overflow-x-hidden hover:text-dark'
            href='/'
          >
            <span
              className={[
                smallMenu ? 'min-w-[64px]' : 'min-w-[52px]',
                'flex justify-center',
              ].join(' ')}
            >
              <Image
                className='w-8 h-8 object-contain'
                src='/images/logo.png'
                alt='Logo'
                width={100}
                height={100}
                priority
              />
            </span>

            <b className='text-2xl'>timex</b>
          </Link>

          <div className='flex items-center gap-3'>
            {smallMenu || (
              <button className='normal_btn relative w-8 h-w-8 grid place-content-center rounded-xl'>
                <Notification />

                {renderBadge()}
              </button>
            )}

            <button
              className={[
                smallMenu ? 'absolute -right-[18px]' : '',
                'normal_btn p-0 m-0 w-[32px] h-[32px] grid place-content-center',
              ].join(' ')}
              onClick={() => setSmallMenu((prev) => !prev)}
            >
              <DoubleLeft
                style={{
                  transform: `scaleX(${smallMenu ? -1 : 1})`,
                }}
              />

              {smallMenu && renderBadge()}
            </button>
          </div>
        </div>

        <ul
          className='absolute top-[60px] w-full flex flex-col gap-y-1 overflow-auto text-[14px] p-2'
          style={{ height: 'calc(100vh - 200px)' }}
        >
          {[...Array(80)].map((_, idx) => (
            <li key={uuid()}>
              <Link
                className='w-full flex items-center text-nowrap overflow-x-hidden rounded  hover:bg-primary hover:text-white'
                href='#'
              >
                <span
                  className={[
                    smallMenu ? 'min-w-[60px]' : 'min-w-[48px]',
                    'width_effect flex justify-center py-2',
                  ].join(' ')}
                >
                  <PiAirplane size={18} />
                </span>

                <span>Menu item {idx + 1}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className='absolute bottom-0 w-full h-[100px] flex flex-col justify-center gap-y-2 rounded-b-2xl border-t border-gray-100 px-2'>
          <button className='text_btn group w-full flex items-center text-start text-nowrap overflow-x-hidden hover:bg-orange-400'>
            <span
              className={[
                smallMenu ? 'min-w-[64px]' : 'min-w-[52px]',
                'flex justify-center text-red-600 py-2 group-hover:text-white',
              ].join(' ')}
            >
              <Logout />
            </span>

            <span className='text-dark group-hover:text-white'>Гарах</span>
          </button>

          <hr />

          <Link
            className='flex items-center text-nowrap overflow-x-hidden mt-1'
            href='#'
          >
            <span
              className={[
                smallMenu ? 'min-w-[64px]' : 'min-w-[52px]',
                'flex justify-center hover:opacity-65',
              ].join(' ')}
            >
              <Image
                className='w-[26px] h-[26px] object-cover rounded-full'
                src='/images/logo.png'
                alt='Avatar'
                width={100}
                height={100}
                priority
              />
            </span>

            <span>Garnet</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
