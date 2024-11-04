'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { GoChevronDown, GoDotFill } from 'react-icons/go';
import { GetMenuIcon } from '../icons';

const MenuItem = ({
  smallMenu,
  icon,
  name,
  link,
  subMenu = [],
  fromSub = false,
  MIN_ICON_WIDTH,
  SMALL_MIN_ICON_WIDTH,
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
    <div className='overflow-hidden px-2'>
      <button
        className={[
          'text_btn w-full hover:bg-[#F6F0FF]',
          menuIsActive() ? 'text-primary' : '',
          fromSub ? 'py-[6px]' : 'py-2',
          subMenu.length > 0 ? 'pr-1' : '',
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
                'my_effect flex justify-center',
                smallMenu ? `${SMALL_MIN_ICON_WIDTH} pr-4` : MIN_ICON_WIDTH,
              ].join(' ')}
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
              transition: 'transform ease-out 0.5s',
              transform: `rotate(${isOpenMenu ? '-180' : '0'}deg)`,
            }}
          />
        )}
      </button>

      {subMenu.length > 0 && (
        <div
          className={[
            'w-full flex-col gap-1',
            isOpenMenu ? 'flex' : 'hidden',
            smallMenu ? 'pl-8 sm:pl-[58px] pb-2' : 'pl-8',
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
