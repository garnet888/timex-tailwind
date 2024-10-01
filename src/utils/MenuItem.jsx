'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { GoChevronDown, GoDotFill } from 'react-icons/go';
import { GetMenuIcon } from './icons';

const MenuItem = ({
  smallMenu,
  icon,
  name,
  link,
  subMenu = [],
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
    >
      <button
        className={[
          menuIsActive() ? 'text-primary' : '',
          'text_btn w-full text-nowrap rounded pr-2 py-2 hover:bg-[#F6F0FF]',
        ].join(' ')}
        onClick={onClickHandler}
      >
        <div className='w-full flex items-center font-light'>
          <span
            className={[
              smallMenu ? `${SMALL_MIN_MENU_WIDTH} pr-4` : 'min-w-[48px]',
              'width_effect flex justify-center',
            ].join(' ')}
          >
            {icon === 'SmallDashOutlined' ? (
              <GoDotFill />
            ) : (
              <GetMenuIcon
                name={icon}
                active={menuIsActive()}
              />
            )}
          </span>

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
            'w-full flex-col pl-10',
          ].join(' ')}
        >
          {subMenu.map((item) => (
            <MenuItem
              key={item.id}
              {...item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
