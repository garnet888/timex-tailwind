'use client';

import { useState } from 'react';
import { IoNotifications } from 'react-icons/io5';
import Sidebar from '@/components/Sidebar';

const AdminLayout = ({ title, children }) => {
  const [smallMenu, setSmallMenu] = useState(false);

  return (
    <main className='admin_layout background_img_2 bg-[#f0f2f5]'>
      <Sidebar
        smallMenu={smallMenu}
        setSmallMenu={setSmallMenu}
      />

      <div
        style={{ gridArea: 'admContent' }}
        className={['relative pr-4', smallMenu && 'ml-4'].join(' ')}
      >
        <header className='sticky left-4 top-[26px] w-full flex justify-between items-center bg-white rounded-full shadow-md p-3 py-1 mt-6 mb-4'>
          <h2>{title}, Garnet</h2>

          <button className='normal_btn relative w-[32px] h-[32px] grid place-content-center rounded-full'>
            <IoNotifications size={18} />
            <p className='absolute -bottom-[10px] -right-[8px] w-[26px] h-[26px] grid place-content-center bg-red-500 text-white text-[12px] border-2 border-white rounded-full'>
              9+
            </p>
          </button>
        </header>

        <div
          className='width_effect absolute left-0 overflow-auto'
          style={{
            width: `calc(100vw - ${smallMenu ? '116' : '300'}px)`,
            height: 'calc(100vh - 110px)',
          }}
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;
