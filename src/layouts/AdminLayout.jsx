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
              ? 'sm:w-adn_small_content'
              : 'sm:pl-0 sm:pr-5 sm:w-adn_content',
            'width_effect sm:min-h-screen overflow-auto p-5',
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
