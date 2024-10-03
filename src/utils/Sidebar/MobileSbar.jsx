import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuMenu } from 'react-icons/lu';
import { Doll, Logout } from '../icons';

const MobileSbar = ({ menu, badgeNumber, shownAlert }) => {
  const drawerRef = useRef();

  const [shownDrawer, setShownDrawer] = useState(false);

  const closeOnClick = (e) => {
    if (drawerRef.current === e.target) {
      setShownDrawer(false);
    }
  };

  return (
    <div className='background_img_1 h-full block sm:hidden bg-white border-b border-white'>
      <div className='w-full h-full flex justify-between items-center px-3'>
        <button
          className='normal_btn p-2'
          onClick={() => setShownDrawer((prev) => !prev)}
        >
          <LuMenu size={20} />
        </button>

        <button className='normal_btn p-0 relative w-8 h-w-8 rounded-xl'>
          <Doll />
          {badgeNumber}
        </button>
      </div>

      {shownDrawer && (
        <div
          ref={drawerRef}
          className='bg-gray-300/60 fixed top-0 z-50 w-full h-screen '
          onClick={closeOnClick}
        >
          <aside className='w-2/3 h-full overflow-y-auto bg-white shadow-md border-r'>
            <div className='sticky top-0 flex justify-between items-center bg-white border-b px-4 py-3'>
              <Link
                className='flex items-center gap-2'
                href='/profile'
              >
                <Image
                  className='w-[36px] h-[36px] object-cover rounded-full'
                  src='/images/logo.png'
                  alt='Avatar'
                  width={100}
                  height={100}
                  priority
                />

                <span>Garnet</span>
              </Link>

              <button
                className='normal_btn px-[6px]'
                onClick={shownAlert}
              >
                <Logout />
              </button>
            </div>

            <ul className='flex flex-col gap-2 py-2 mx-2'>{menu}</ul>
          </aside>
        </div>
      )}
    </div>
  );
};

export default MobileSbar;
