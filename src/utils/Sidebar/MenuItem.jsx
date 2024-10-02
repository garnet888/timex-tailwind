'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { GoChevronDown, GoDotFill } from 'react-icons/go';
import { GetMenuIcon } from '../icons';

const MenuItem = ({
  inMobile = false,
  smallMenu,
  icon,
  name,
  link,
  subMenu = [],
  fromSub = false,
  MENU_WIDTH,
  SMALL_MENU_WIDTH,
  SMALL_MIN_MENU_WIDTH,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuIsActive = () => {
    let LINK = link;

    if (subMenu?.length > 0) {
      LINK = String(subMenu[0].link).split('/')[1];
    }

    return String(pathname).includes(LINK);
  };

  const onClickHandler = () => {
    if (subMenu.length > 0) {
      setIsOpenMenu((prev) => !prev);
    } else {
      router.push(link);
    }
  };

  return (
    <div
      className={[
        smallMenu ? `${SMALL_MENU_WIDTH} hover:pr-0` : MENU_WIDTH,
        `width_effect bg-white rounded-lg overflow-x-hidden px-2 hover:${MENU_WIDTH}`,
      ].join(' ')}
      style={
        inMobile
          ? {
              width: 'auto',
              paddingInline: 0,
            }
          : {}
      }
    >
      <button
        className={[
          menuIsActive() ? 'text-primary' : '',
          fromSub ? 'py-[6px]' : 'py-2',
          'text_btn w-full text-nowrap rounded pr-2 hover:bg-[#F6F0FF]',
        ].join(' ')}
        onClick={onClickHandler}
      >
        <div className='w-full flex items-center text-sm font-light'>
          {icon === 'SmallDashOutlined' ? (
            <span className='min-w-4 ml-1 mr-2'>
              <GoDotFill />
            </span>
          ) : (
            <span
              className={[
                smallMenu ? `${SMALL_MIN_MENU_WIDTH} pr-4` : 'min-w-[48px]',
                'width_effect flex justify-center',
              ].join(' ')}
              style={inMobile ? { minWidth: 'auto', paddingInline: 8 } : {}}
            >
              <GetMenuIcon
                name={icon}
                active={menuIsActive()}
              />
            </span>
          )}

          <span>{name}</span>
        </div>

        {subMenu.length > 0 && (
          <GoChevronDown
            size={20}
            style={{
              transition: 'transform ease 0.3s',
              transform: `rotate(${isOpenMenu ? '-180' : '0'}deg)`,
            }}
          />
        )}
      </button>

      {subMenu.length > 0 && (
        <div
          className={[
            isOpenMenu ? 'flex' : 'hidden',
            smallMenu ? 'pl-8 sm:pl-[58px] pb-2' : 'pl-8',
            'w-full flex-col gap-1',
          ].join(' ')}
        >
          {subMenu.map((item) => (
            <MenuItem
              key={item.id}
              fromSub
              {...item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
