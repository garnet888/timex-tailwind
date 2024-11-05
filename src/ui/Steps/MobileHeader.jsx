'use client';

import { useRef, useState } from 'react';
import { ChevronArrow } from '@/utils/icons';

const MobileHeader = ({ steps, current, normal, renderHeaders }) => {
  const drawerRef = useRef();

  const [shownDrawer, setShownDrawer] = useState(false);

  const closeOnClick = (e) => {
    if (drawerRef.current === e.target) {
      setShownDrawer(false);
    }
  };

  const visibleDrawerHandler = () => {
    setShownDrawer((prev) => !prev);
  };

  return (
    <div
      className={[
        'block md:hidden bg-white',
        normal ? '' : 'rounded-3xl shadow-sm px-3 py-2',
      ].join(' ')}
    >
      <div className='md:hidden flex justify-center items-center gap-3'>
        {current === 0 || (
          <button
            className='normal_btn h-auto p-[2px]'
            onClick={visibleDrawerHandler}
          >
            <ChevronArrow rotate='left' />
          </button>
        )}

        <button
          className='text_btn cursor-pointer flex items-center gap-2'
          onClick={visibleDrawerHandler}
        >
          {steps[current].activeIcon}
          {steps[current].title}
        </button>

        {current < steps?.length - 1 && (
          <button
            className='normal_btn h-auto p-[2px]'
            onClick={visibleDrawerHandler}
          >
            <ChevronArrow rotate='right' />
          </button>
        )}
      </div>

      {shownDrawer && (
        <div
          ref={drawerRef}
          className='bg-gray-300/60 absolute top-0 left-0 z-50 w-screen h-screen'
          onClick={closeOnClick}
        >
          <div className='w-2/3 h-full flex flex-col justify-center items-center gap-4 bg-white/60 shadow-md border-r'>
            {renderHeaders(true)}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
