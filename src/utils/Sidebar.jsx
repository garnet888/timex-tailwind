import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DoubleLeft, Logout, Notification } from './icons';
import { destroyTokens } from '@/lib/auth';
import { fetchMenu } from '@/lib/helper';
import MenuItem from './MenuItem';

let badge = 1;

const MENU_WIDTH = 'w-[260px]';
const SMALL_MENU_WIDTH = 'w-[80px]';
const SMALL_MIN_MENU_WIDTH = 'min-w-[80px]';

const Sidebar = ({ smallMenu, smallMenuHandler }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu(setMenu);
  }, []);

  const getItem = (_item) => {
    return (
      <MenuItem
        key={_item.id}
        smallMenu={smallMenu}
        MENU_WIDTH={MENU_WIDTH}
        SMALL_MENU_WIDTH={SMALL_MENU_WIDTH}
        SMALL_MIN_MENU_WIDTH={SMALL_MIN_MENU_WIDTH}
        {..._item}
      />

      // <div
      //   key={id}
      //   className={[
      //     smallMenu ? SMALL_MENU_WIDTH : MENU_WIDTH,
      //     fromItem ? `!${MENU_WIDTH}` : '',
      //     `width_effect bg-white rounded-lg overflow-x-hidden px-2 hover:${MENU_WIDTH} hover:pr-0`,
      //   ].join(' ')}
      // >
      //   <button
      //     className={[
      //       menuIsActive(link) ? 'text-primary' : '',
      //       'text_btn w-full text-nowrap rounded py-2 hover:bg-[#F6F0FF]',
      //     ].join(' ')}
      //     onClick={() => router.push(link)}
      //   >
      //     <div className='w-full flex items-center'>
      //       <span
      //         className={[
      //           smallMenu
      //             ? `${SMALL_MIN_MENU_WIDTH} pr-4`
      //             : 'min-w-[48px]',
      //           'width_effect flex justify-center',
      //         ].join(' ')}
      //       >
      //         <GetMenuIcon name={icon} active={menuIsActive(link)} />
      //       </span>

      //       <span>{name}</span>
      //     </div>
      //   </button>
      // </div>
    );
  };

  const getSubMenu = (_item, subMenu) => {
    return (
      <MenuItem
        key={_item.id}
        smallMenu={smallMenu}
        subMenu={subMenu}
        MENU_WIDTH={MENU_WIDTH}
        SMALL_MENU_WIDTH={SMALL_MENU_WIDTH}
        SMALL_MIN_MENU_WIDTH={SMALL_MIN_MENU_WIDTH}
        {..._item}
      />

      // <div
      //   key={id}
      //   className={[
      //     smallMenu ? SMALL_MENU_WIDTH : MENU_WIDTH,
      //     `width_effect bg-white rounded-lg overflow-x-hidden px-2 hover:${MENU_WIDTH} hover:pr-0`,
      //   ].join(' ')}
      // >
      //   <button
      //     className={[
      //       menuIsActive(subMenu[0].link) ? 'text-primary' : '',
      //       'text_btn w-full text-nowrap rounded pr-2 py-2 hover:bg-[#F6F0FF]',
      //     ].join(' ')}
      //     onClick={() => setDropedMenu((prev) => (prev ? '' : id))}
      //   >
      //     <div className='w-full flex items-center'>
      //       <span
      //         className={[
      //           smallMenu
      //             ? `${SMALL_MIN_MENU_WIDTH} pr-4`
      //             : 'min-w-[48px]',
      //           'width_effect flex justify-center',
      //         ].join(' ')}
      //       >
      //         <GetMenuIcon name={icon} active={menuIsActive(subMenu[0].link)} />
      //       </span>

      //       <span>{name}</span>
      //     </div>

      //     <HiChevronDown
      //       size={16}
      //       style={{
      //         transition: 'transform ease 0.3s',
      //         transform: `rotate(${dropedMenu === id ? '-180' : '0'}deg)`,
      //       }}
      //     />
      //   </button>

      //   {subMenu && (
      //     <div
      //       className={[
      //         dropedMenu === id ? 'flex' : 'hidden',
      //         'w-full flex-col',
      //       ].join(' ')}
      //     >
      //       {subMenu.map((child) => getItem(child, true))}
      //     </div>
      //   )}
      // </div>
    );
  };

  const renderBadge = () => {
    if (badge) {
      return (
        <p className='absolute -top-[6px] -right-[10px] h-[14px] grid place-content-center bg-white border border-light_grey text-[10px] rounded-[100px] px-1 py-px'>
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
    <aside
      style={{ gridArea: 'sidebar' }}
      className={[
        smallMenu ? 'w-small_menu' : 'w-menu',
        'hidden sm:block width_effect sticky top-0 h-screen p-[20px]',
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
                <Notification />

                {renderBadge()}
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

              {smallMenu && renderBadge()}
            </button>
          </div>
        </div>

        <div
          className='absolute top-[60px] flex flex-col gap-y-1 overflow-auto text-[14px]'
          style={{ height: 'calc(100vh - 200px)' }}
        >
          {renderMenu()}
        </div>

        <div className='absolute bottom-0 w-full h-[100px] flex flex-col justify-center gap-y-2 rounded-b-2xl border-t border-gray-100'>
          <div
            className={[
              smallMenu ? `${SMALL_MENU_WIDTH} hover:pr-0` : MENU_WIDTH,
              `width_effect bg-white rounded-lg overflow-x-hidden px-2 hover:w-[260px]`,
            ].join(' ')}
          >
            <button
              className='text_btn group w-full justify-start text-nowrap overflow-x-hidden hover:bg-orange-400'
              onClick={() => destroyTokens()}
            >
              <span
                className={[
                  smallMenu ? `${SMALL_MIN_MENU_WIDTH} pr-4` : 'min-w-[48px]',
                  'flex justify-center text-red-500 py-2 group-hover:text-white',
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
              className='flex items-center text-nowrap overflow-x-hidden py-1'
              href='#'
            >
              <span
                className={[
                  smallMenu ? `${SMALL_MIN_MENU_WIDTH} pr-4` : 'min-w-[48px]',
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
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
