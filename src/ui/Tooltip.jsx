'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const Tooltip = ({ topSpace = 6, content, children }) => {
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
    <div ref={tooltipRef} className='relative z-10'>
      <div className='cursor-pointer flex active:scale-75 active:duration-500'>
        {content}
      </div>

      <div
        className={[
          visibleMenu ? '' : 'hidden',
          'block absolute right-0 overflow-auto bg-white rounded shadow-tooltip',
        ].join(' ')}
        style={{ marginTop: topSpace }}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
