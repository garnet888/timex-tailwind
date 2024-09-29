'use client';

import { useState } from 'react';
import { FaRegEye, FaEyeSlash } from 'react-icons/fa';
import InputPrefix from './InputPrefix';

const InputPassword = (props) => {
  const [type, setType] = useState('password');

  const seeOnClick = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  return (
    <InputPrefix
      {...props}
      type={type}
      after={
        <button
          className='text_btn mt-[2px]'
          type='button'
          onClick={seeOnClick}
        >
          {type === 'password' ? (
            <FaRegEye size={18} color='gray' />
          ) : (
            <FaEyeSlash size={18} color='gray' />
          )}
        </button>
      }
    />
  );
};

export default InputPassword;
