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
        <span
          className='cursor-pointer select-none mt-[2px]'
          onClick={seeOnClick}
        >
          {type === 'password' ? (
            <FaRegEye size={18} color='gray' />
          ) : (
            <FaEyeSlash size={18} color='gray' />
          )}
        </span>
      }
    />
  );
};

export default InputPassword;
