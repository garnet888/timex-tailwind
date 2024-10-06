import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMainContext } from '@/context/MainContext';
import { DoubleLeft, Logout, Doll } from '../icons';
import { Alert } from '@/ui';
import { destroyTokens } from '@/lib/auth';
import { fetchMenu } from '@/lib/helper';
import MobileSbar from './MobileSbar';
import MenuItem from './MenuItem';

let badge = 1;

const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;

const MENU_WIDTH = 'w-[260px]';
const SMALL_MENU_WIDTH = 'w-[80px]';
const SMALL_MIN_MENU_WIDTH = 'min-w-[80px]';

const Sidebar = ({ smallMenu, smallMenuHandler }) => {
  const { userInfo, fecthUserInfo } = useMainContext();

  const [menu, setMenu] = useState([]);
  const [shownAlert, setShownAlert] = useState(false);

  useEffect(() => {
    fecthUserInfo();
    fetchMenu(setMenu);
  }, []);

  const getItem = (_item, _inMobile) => {
    return (
      <MenuItem
        key={_item.id}
        inMobile={_inMobile}
        smallMenu={smallMenu}
        MENU_WIDTH={MENU_WIDTH}
        SMALL_MENU_WIDTH={SMALL_MENU_WIDTH}
        SMALL_MIN_MENU_WIDTH={SMALL_MIN_MENU_WIDTH}
        {..._item}
      />
    );
  };

  const getSubMenu = (_item, subMenu, _inMobile) => {
    return (
      <MenuItem
        key={_item.id}
        inMobile={_inMobile}
        smallMenu={smallMenu}
        subMenu={subMenu}
        MENU_WIDTH={MENU_WIDTH}
        SMALL_MENU_WIDTH={SMALL_MENU_WIDTH}
        SMALL_MIN_MENU_WIDTH={SMALL_MIN_MENU_WIDTH}
        {..._item}
      />
    );
  };

  const renderBadgeNumber = () => {
    if (badge) {
      return (
        <p className='absolute -top-[6px] -right-[10px] h-[14px] grid place-content-center bg-white border border-light_grey text-[10px] rounded-[100px] px-1 py-px'>
          9+
        </p>
      );
    }
  };

  const renderMenu = (inMobile) => {
    if (menu?.length > 0) {
      return menu.map((item) => {
        if (item?.children) {
          const { children } = item;

          return getSubMenu(item, children, inMobile);
        } else {
          return getItem(item, inMobile);
        }
      });
    }
  };

  return (
    <div style={{ gridArea: 'sidebar' }}>
      <Alert
        text='Та гарахдаа итгэлтэй байна уу?'
        visible={shownAlert}
        noOnClick={() => setShownAlert(false)}
        yesOnClick={() => destroyTokens()}
      />

      <MobileSbar
        profile={IMG_URL + userInfo?.profileImage}
        firstName={userInfo?.firstName}
        lastName={userInfo?.lastName}
        menu={renderMenu(true)}
        badgeNumber={renderBadgeNumber()}
        shownAlert={() => setShownAlert(true)}
      />

      <aside
        className={[
          smallMenu ? 'w-small_menu' : 'w-menu',
          'hidden sm:block width_effect sticky top-0 h-screen p-5',
        ].join(' ')}
      >
        <nav className='relative h-full bg-white rounded-2xl'>
          <div
            className={[
              smallMenu ? SMALL_MENU_WIDTH : MENU_WIDTH,
              'width_effect fixed top-[20px] h-[60px] flex justify-between items-center px-2',
            ].join(' ')}
          >
            <Link
              className='flex items-center text-nowrap overflow-x-hidden hover:text-dark'
              href='/'
            >
              <span
                className={[
                  smallMenu ? `${SMALL_MIN_MENU_WIDTH} pr-4` : 'min-w-[52px]',
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
                <button className='normal_btn p-0 relative w-8 h-w-8 rounded-xl'>
                  <Doll />
                  {renderBadgeNumber()}
                </button>
              )}

              <button
                className={[
                  smallMenu ? 'absolute -right-[18px]' : '',
                  'normal_btn p-0 m-0 w-[32px] h-[32px]',
                ].join(' ')}
                onClick={smallMenuHandler}
              >
                <DoubleLeft
                  style={{
                    transform: `scaleX(${smallMenu ? -1 : 1})`,
                  }}
                />

                {smallMenu && renderBadgeNumber()}
              </button>
            </div>
          </div>

          <div
            className='absolute top-[60px] overflow-y-auto'
            style={{ height: 'calc(100vh - 200px)' }}
          >
            <div className='flex flex-col gap-1'>{renderMenu()}</div>
          </div>

          <div className='absolute bottom-0 w-full h-[120px] flex flex-col justify-center gap-y-2 rounded-b-2xl border-t border-gray-100'>
            <div
              className={[
                smallMenu ? `${SMALL_MENU_WIDTH} hover:pr-0` : MENU_WIDTH,
                `width_effect bg-white rounded-lg overflow-x-hidden px-2 hover:w-[260px]`,
              ].join(' ')}
            >
              <button
                className='text_btn group w-full justify-start text-nowrap overflow-x-hidden text-sm py-2 hover:bg-orange-400'
                onClick={() => setShownAlert(true)}
              >
                <span
                  className={[
                    smallMenu ? `${SMALL_MIN_MENU_WIDTH} pr-4` : 'min-w-[48px]',
                    'flex justify-center text-red-500 group-hover:text-white',
                  ].join(' ')}
                >
                  <Logout />
                </span>

                <span className='font-light group-hover:text-white'>Гарах</span>
              </button>
            </div>

            <hr className='mx-4' />

            <div
              className={[
                smallMenu ? `${SMALL_MENU_WIDTH} hover:pr-0` : MENU_WIDTH,
                `width_effect bg-white font-light rounded-lg overflow-x-hidden px-2 hover:${MENU_WIDTH}`,
              ].join(' ')}
            >
              <Link
                className='flex items-center text-nowrap overflow-x-hidden text-sm'
                href='/profile'
              >
                <span
                  className={[
                    smallMenu ? `${SMALL_MIN_MENU_WIDTH} pr-4` : 'min-w-[48px]',
                    'flex justify-center hover:opacity-65',
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

                <span className='flex flex-col'>
                  {userInfo?.lastName}
                  <b className='font-semibold'>{userInfo?.firstName}</b>
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
