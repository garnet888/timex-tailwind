'use client';

import { useState } from 'react';
import Modal from 'react-minimal-modal';
import { BiSolidError } from 'react-icons/bi';

const Alert = ({ text = '', visible = false, noOnClick, yesOnClick }) => {
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
      footer={
        <div className='flex justify-end gap-4 mt-4'>
          <button
            className='normal_btn'
            disabled={isLoading}
            onClick={noOnClick}
          >
            Үгүй
          </button>

          <button
            className='normal_btn bg-orange-400 text-white hover:text-primary'
            disabled={isLoading}
            onClick={yesHandler}
          >
            {isLoading ? <span className='load_spinner w-4' /> : 'Тийм'}
          </button>
        </div>
      }
    >
      <span className='flex items-end gap-2'>
        <BiSolidError
          size={26}
          color='orange'
        />

        {text}
      </span>
    </Modal>
  );
};

export default Alert;
