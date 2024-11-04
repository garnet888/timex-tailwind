'use client';

import { useEffect, useState } from 'react';
import { disableSmallMenu, enableSmallMenu, getSmallMenu } from '@/lib/helper';
import Sidebar from '@/utils/Sidebar';

const AdminLayout = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [smallMenu, setSmallMenu] = useState();

  useEffect(() => {
    setSmallMenu(getSmallMenu() === 'YES');

    setIsMounted(true);
  }, []);

  const smallMenuHandler = () => {
    setSmallMenu((prev) => !prev);

    if (smallMenu) {
      disableSmallMenu();
    } else {
      enableSmallMenu();
    }
  };

  if (isMounted) {
    return (
      <main className='w-full h-screen overflow-auto background_img_2 bg-[#f0f2f5]'>
        <Sidebar
          smallMenu={smallMenu}
          smallMenuHandler={smallMenuHandler}
        />

        <div
          className={[
            'my_effect sm:absolute z-10 sm:min-h-screen sm:overflow-auto p-5',
            smallMenu
              ? 'left-small_menu sm:w-adn_small_content'
              : 'left-menu sm:pl-0 sm:pr-5 sm:w-adn_content',
          ].join(' ')}
        >
          {children}
        </div>
      </main>
    );
  }

  return <main className='w-full h-screen background_img_2 bg-[#f0f2f5]' />;
};

export default AdminLayout;
