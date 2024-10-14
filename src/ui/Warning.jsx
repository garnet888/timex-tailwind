'use client';

import { useState } from 'react';
import Modal from 'react-minimal-modal';
import { BiSolidError } from 'react-icons/bi';

const Warning = ({ text = '', visible = false, noOnClick, yesOnClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClose = () => {
    if (!isLoading) {
      noOnClick();
    }
  };

  const yesHandler = () => {
    setIsLoading(true);
    yesOnClick();
  };

  return (
    <Modal
      className='border-2 border-orange-400 rounded-xl p-6'
      width={400}
      open={visible}
      hideIcon
      onClose={onClose}
    >
      <span className='flex gap-2'>
        <BiSolidError className='mt-1' size={26} color='orange' />

        {text}
      </span>

      <div className='flex justify-end gap-4 mt-4'>
        <button
          className='normal_btn text-dark'
          disabled={isLoading}
          onClick={noOnClick}
        >
          Үгүй
        </button>

        <button
          className='normal_btn bg-orange-400 text-white hover:text-orange-400 hover:border-orange-400'
          disabled={isLoading}
          onClick={yesHandler}
        >
          {isLoading ? <span className='load_spinner w-4' /> : 'Тийм'}
        </button>
      </div>
    </Modal>
  );
};

export default Warning;
