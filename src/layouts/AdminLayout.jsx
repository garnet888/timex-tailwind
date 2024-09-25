'use client';

import { useState } from 'react';
import { IoNotifications } from 'react-icons/io5';
import { Tooltip } from '@/ui';
import Sidebar from '@/utils/Sidebar';

const AdminLayout = ({ title, children }) => {
  let badge = 1;

  const [smallMenu, setSmallMenu] = useState(false);

  return (
    <main className='adminLayout background_img_2 bg-[#f0f2f5]'>
      <Sidebar
        smallMenu={smallMenu}
        setSmallMenu={setSmallMenu}
      />

      <div
        style={{ gridArea: 'admContent' }}
        className={['relative pr-4', smallMenu && 'ml-4'].join(' ')}
      >
        <header className='w-full flex justify-between items-center bg-white rounded-full shadow-md p-3 py-1 mt-[26px] mb-4'>
          <h3 className='font-semibold'>{title}, Garnet</h3>

          <Tooltip
            topSpace={badge ? 12 : 4}
            content={
              <button className='normal_btn relative w-[30px] h-[30px] grid place-content-center rounded-full'>
                <IoNotifications size={18} />

                {badge && (
                  <p className='absolute -bottom-[10px] -right-[8px] w-[24px] h-[24px] grid place-content-center bg-red-500 text-white text-[12px] border-2 border-white rounded-full'>
                    9+
                  </p>
                )}
              </button>
            }
          >
            <p className='text-lg font-semibold px-[12px] py-2'>Мэдэгдлүүд</p>
            <hr />

            <ul className='w-[480px] h-notification overflow-auto px-[12px] py-2'>
              <li>Notification 1</li>
              <li>Notification 2</li>
              <li>Notification 3</li>
              <li>Notification 4</li>
              <li>Notification 5</li>
              <li>Notification 6</li>
              <li>Notification 7</li>
              <li>Notification 8</li>
              <li>Notification 9</li>
              <li>Notification 10</li>
              <li>Notification 11</li>
              <li>Notification 12</li>
              <li>Notification 13</li>
              <li>Notification 14</li>
              <li>Notification 15</li>
              <li>Notification 16</li>
              <li>Notification 17</li>
              <li>Notification 18</li>
            </ul>
          </Tooltip>
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
