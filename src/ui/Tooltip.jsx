'use client';

import Tooltip from 'rc-tooltip';

const TimexTooltip = ({ children, content, placement }) => {
  return (
    <div className='red_tooltip'>
      <Tooltip
        placement={placement}
        overlay={content}
      >
        <div className='cursor-pointer w-fit'>{children}</div>
      </Tooltip>
    </div>
  );
};

export default TimexTooltip;
