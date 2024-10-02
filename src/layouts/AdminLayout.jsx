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
      <main className='admin_layout background_img_2 bg-[#f0f2f5]'>
        <Sidebar
          smallMenu={smallMenu}
          smallMenuHandler={smallMenuHandler}
        />

        <div
          style={{ gridArea: 'adn_content' }}
          className={[
            smallMenu
              ? 'px-4 sm:w-adn_small_content'
              : 'mx-3 sm:mx-0 sm:w-adn_content',
            'width_effect sm:min-h-screen overflow-auto pt-[20px] pb-2',
          ]}
        >
          {children}
        </div>
      </main>
    );
  }

  return <main className='admin_layout background_img_2 bg-[#f0f2f5]' />;
};

export default AdminLayout;
