'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const Tooltip = ({ content, children }) => {
  const tooltipRef = useRef(null);

  const [visibleMenu, setVisibleMenu] = useState(false);

  const hangleClickOutside = useCallback((e) => {
    if (tooltipRef.current && tooltipRef.current.contains(e.target)) {
      setVisibleMenu((val) => !val);
    } else {
      setVisibleMenu(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', hangleClickOutside);
  }, [hangleClickOutside]);

  return (
    <div className='relative'>
      <div
        ref={tooltipRef}
        className='cursor-pointer flex active:scale-75 active:duration-500'
      >
        {content}
      </div>

      <div
        className={[
          visibleMenu ? '' : 'hidden',
          'block absolute right-0 z-tooltip bg-white rounded shadow-tooltip mt-[6px]',
        ].join(' ')}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
