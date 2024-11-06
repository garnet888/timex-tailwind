import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMainContext } from '@/context/MainContext';
import { destroyTokens, getRole } from '@/lib/auth';
import { fetchMenu } from '@/lib/helper';
import { Warning } from '@/ui';
import { ChevronDoubleArrow, LogoutIcon, DollIcon } from '../icons';
import MobileSbar from './MobileSbar';
import MenuItem from './MenuItem';

let badge = 1;

const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;

const MENU_WIDTH = 'w-[260px]';
const SMALL_MENU_WIDTH = 'w-[80px]';
const MIN_ICON_WIDTH = 'min-w-[42px]';
const SMALL_MIN_ICON_WIDTH = 'min-w-[80px]';

const Sidebar = ({ smallMenu, smallMenuHandler }) => {
  const { userInfo, fecthUserInfo } = useMainContext();

  const [role, setRole] = useState('');
  const [menu, setMenu] = useState([]);
  const [shownAlert, setShownAlert] = useState(false);

  useEffect(() => {
    setRole(getRole());

    fecthUserInfo();
    fetchMenu(setMenu);
  }, [fecthUserInfo]);

  const getItem = (_item) => {
    return (
      <MenuItem
        key={_item.id}
        smallMenu={smallMenu}
        MIN_ICON_WIDTH={MIN_ICON_WIDTH}
        SMALL_MIN_ICON_WIDTH={SMALL_MIN_ICON_WIDTH}
        {..._item}
      />
    );
  };

  const getSubMenu = (_item, subMenu) => {
    return (
      <MenuItem
        key={_item.id}
        smallMenu={smallMenu}
        subMenu={subMenu}
        MIN_ICON_WIDTH={MIN_ICON_WIDTH}
        SMALL_MIN_ICON_WIDTH={SMALL_MIN_ICON_WIDTH}
        {..._item}
      />
    );
  };

  const renderBadgeNumber = () => {
    if (badge) {
      return (
        <p className='absolute -top-[6px] -right-[10px] h-[14px] grid place-content-center bg-red-500 text-white text-[10px] rounded-[100px] px-1 py-px'>
          9+
        </p>
      );
    }
  };

  const renderMenu = () => {
    if (menu?.length > 0) {
      return menu.map((item) => {
        if (item?.children) {
          const { children } = item;

          return getSubMenu(item, children);
        } else {
          return getItem(item);
        }
      });
    }
  };

  return (
    <>
      <Warning
        text='Та гарахдаа итгэлтэй байна уу?'
        visible={shownAlert}
        noOnClick={() => setShownAlert(false)}
        yesOnClick={() => destroyTokens()}
      />

      <MobileSbar
        role={role}
        profile={IMG_URL + userInfo?.profileImage}
        firstName={userInfo?.firstName}
        lastName={userInfo?.lastName}
        menu={renderMenu()}
        badgeNumber={renderBadgeNumber()}
        shownAlert={() => setShownAlert(true)}
      />

      <aside
        className={[
          'my_effect hidden sm:block fixed top-0 z-20 h-screen p-5',
          smallMenu ? 'w-small_menu' : 'w-menu',
        ].join(' ')}
      >
        <nav className='relative h-full bg-white rounded-2xl'>
          <div
            className={[
              'my_effect h-[50px] flex justify-between px-2 pt-3',
              smallMenu ? SMALL_MENU_WIDTH : MENU_WIDTH,
            ].join(' ')}
          >
            <Link
              className='flex text-nowrap overflow-hidden hover:text-dark'
              href='/'
            >
              <span
                className={[
                  'my_effect flex justify-center',
                  smallMenu ? `${SMALL_MIN_ICON_WIDTH} pr-4` : MIN_ICON_WIDTH,
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

            <div className='flex gap-3'>
              {role === 'SUPER_ADMIN' || smallMenu || (
                <Link
                  className='normal_btn click_effect relative w-8 h-8 grid place-content-center rounded-xl'
                  href='/notification'
                >
                  <DollIcon />
                  {renderBadgeNumber()}
                </Link>
              )}

              <button
                className={[
                  'normal_btn p-0 w-[32px] h-[32px]',
                  smallMenu ? 'absolute -right-4.5' : '',
                ].join(' ')}
                onClick={smallMenuHandler}
              >
                <ChevronDoubleArrow rotate={smallMenu ? 'right' : ''} />

                {smallMenu && role !== 'SUPER_ADMIN' && renderBadgeNumber()}
              </button>
            </div>
          </div>

          <div
            className={[
              'my_effect absolute top-[50px] overflow-auto py-[10px] mt-1',
              smallMenu
                ? `${SMALL_MENU_WIDTH} hover:w-[260px] bg-white rounded-lg`
                : MENU_WIDTH,
            ].join(' ')}
            /* calc(VH - [sidebar's Y padding] - [header's height] - [footer's height]) */
            style={{ height: 'calc(100vh - 44px - 50px - 120px)' }}
          >
            <div className='flex flex-col gap-1'>{renderMenu()}</div>
          </div>

          <div
            className={[
              'my_effect absolute bottom-0 h-[120px] flex flex-col justify-center bg-white rounded-b-2xl border-t border-gray-100 px-2',
              smallMenu
                ? `${SMALL_MENU_WIDTH} hover:w-[260px] hover:rounded-2xl`
                : MENU_WIDTH,
            ].join(' ')}
          >
            <button
              className='text_btn group w-full justify-start overflow-hidden text-sm py-2 hover:bg-orange-400'
              onClick={() => setShownAlert(true)}
            >
              <span
                className={[
                  'my_effect flex justify-center',
                  smallMenu ? `${SMALL_MIN_ICON_WIDTH} pr-4` : MIN_ICON_WIDTH,
                ].join(' ')}
              >
                <LogoutIcon />
              </span>

              <span className='font-light group-hover:text-white'>Гарах</span>
            </button>

            <hr className='mx-2 my-2' />

            <Link
              className='flex items-center text-nowrap overflow-hidden text-sm rounded-lg mt-1 hover:bg-white'
              href='/profile'
            >
              <span
                className={[
                  'my_effect flex justify-center hover:opacity-65',
                  smallMenu ? `${SMALL_MIN_ICON_WIDTH} pr-4` : MIN_ICON_WIDTH,
                ].join(' ')}
              >
                <Image
                  className='w-[34px] h-[34px] object-cover rounded-full'
                  src={IMG_URL + userInfo?.profileImage}
                  alt='Avatar'
                  width={100}
                  height={100}
                  priority
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/default_avatar.svg';
                  }}
                />
              </span>

              <span className='flex flex-col ml-[6px]'>
                {role === 'SUPER_ADMIN' ? 'SUPER ADMIN' : userInfo?.lastName}
                <b className='font-semibold'>{userInfo?.firstName}</b>
              </span>
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
