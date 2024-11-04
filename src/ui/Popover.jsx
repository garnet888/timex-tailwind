'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const Popover = ({ topSpace = 6, content, children }) => {
  const popoverRef = useRef(null);

  const [visibleMenu, setVisibleMenu] = useState(false);

  const hangleClickOutside = useCallback((e) => {
    if (popoverRef.current && popoverRef.current.contains(e.target)) {
      setVisibleMenu((val) => !val);
    } else {
      setVisibleMenu(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', hangleClickOutside);
  }, [hangleClickOutside]);

  return (
    <div
      ref={popoverRef}
      className='relative z-10'
    >
      <div className='cursor-pointer flex active:scale-75 active:duration-500'>
        {content}
      </div>

      <div
        className={[
          'block absolute right-0 overflow-auto bg-white rounded',
          visibleMenu ? '' : 'hidden',
        ].join(' ')}
        style={{ marginTop: topSpace }}
      >
        {children}
      </div>
    </div>
  );
};

export default Popover;
