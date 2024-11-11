'use client';

import { useState } from 'react';
import Modal from 'react-minimal-modal';
import { BiSolidError } from 'react-icons/bi';

const Warning = ({
  width,
  icon = (
    <BiSolidError
      className='mt-1'
      size={26}
      color='orange'
    />
  ),
  title = '',
  text = '',
  yesText = 'Тийм',
  noText = 'Үгүй',
  borderColor = 'orange',
  visible = false,
  hiddenNoButton = false,
  yesOnClick,
  noOnClick,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const yesHandler = () => {
    setIsLoading(true);
    yesOnClick();
  };

  return (
    <Modal
      className='border-2 rounded-xl p-6'
      style={{ borderColor: borderColor }}
      width={width}
      open={visible}
      hideIcon
    >
      <div className='flex gap-2'>
        {icon}

        <div className='flex flex-col gap-1'>
          {title && <b className='font-semibold'>{title}</b>}

          <div>{text}</div>
        </div>
      </div>

      <div className='flex justify-end gap-4 mt-4'>
        {hiddenNoButton || (
          <button
            className='normal_btn text-dark'
            disabled={isLoading}
            onClick={noOnClick}
          >
            {noText}
          </button>
        )}

        <button
          className='normal_btn text-white hover:text-white hover:border-transparent'
          style={{ backgroundColor: borderColor }}
          disabled={isLoading}
          onClick={yesHandler}
        >
          {isLoading ? <span className='load_spinner w-4' /> : yesText}
        </button>
      </div>
    </Modal>
  );
};

export default Warning;
