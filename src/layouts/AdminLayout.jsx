'use client';

import { useState } from 'react';
import { disableSmallMenu, enableSmallMenu, getSmallMenu } from '@/lib/helper';
import Sidebar from '@/utils/Sidebar';

const AdminLayout = ({ children }) => {
  const [smallMenu, setSmallMenu] = useState(getSmallMenu() === 'YES');

  const smallMenuHandler = () => {
    setSmallMenu((prev) => !prev);

    if (smallMenu) {
      disableSmallMenu();
    } else {
      enableSmallMenu();
    }
  };

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
            ? 'pl-[12px] ml-4 sm:ml-0 sm:w-adn_small_content'
            : 'ml-4 sm:ml-0 sm:w-adn_content',
          'width_effect h-screen overflow-auto',
        ]}
      >
        {children}
      </div>
    </main>
  );
};

export default AdminLayout;
