import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuMenu } from 'react-icons/lu';
import { DollIcon, LogoutIcon } from '../icons';

const MobileSbar = ({
  role,
  profile,
  lastName,
  firstName,
  menu,
  badgeNumber,
  shownAlert,
}) => {
  const drawerRef = useRef();

  const [shownDrawer, setShownDrawer] = useState(false);

  const closeOnClick = (e) => {
    if (drawerRef.current === e.target) {
      setShownDrawer(false);
    }
  };

  return (
    <div className='h-header block sm:hidden'>
      <div className='background_img_1 fixed z-10 w-screen h-header bg-white border-b border-white'>
        <div className='h-full flex justify-between items-center px-3'>
          <button
            className='normal_btn p-2'
            onClick={() => setShownDrawer((prev) => !prev)}
          >
            <LuMenu size={20} />
          </button>

          {role === 'SUPER_ADMIN' || (
            <button className='normal_btn p-0 relative w-8 rounded-xl'>
              <DollIcon />
              {badgeNumber}
            </button>
          )}
        </div>

        {shownDrawer && (
          <div
            ref={drawerRef}
            className='fixed top-0 z-20 w-screen h-screen bg-gray-300/60'
            onClick={closeOnClick}
          >
            <aside className='w-3/4 h-full overflow-auto bg-white shadow-md border-r'>
              <div className='sticky top-0 flex justify-between items-center bg-white border-b px-4 py-3'>
                <Link
                  className='flex items-center gap-2'
                  href='/profile'
                >
                  <Image
                    className='min-w-[36px] min-h-[36px] w-[36px] h-[36px] object-cover rounded-full'
                    src={profile}
                    alt='Profile'
                    width={100}
                    height={100}
                    priority
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/default_avatar.svg';
                    }}
                  />

                  <span className='font-semibold leading-tight'>
                    {firstName ? firstName : lastName}
                  </span>
                </Link>

                <button
                  className='normal_btn px-[6px]'
                  onClick={shownAlert}
                >
                  <LogoutIcon />
                </button>
              </div>

              <ul className='flex flex-col gap-2 py-2 mx-2'>{menu}</ul>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileSbar;
