'use client';

import { useState } from 'react';

const Textarea = ({
  containerClassName = '',
  className = '',
  placeholder = '',
  type,
  shownCount = false,
  maxLength,
  disabled = false,
  getValue,
}) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
    getValue && getValue(e.target.value);
  };

  return (
    <div
      className={[
        containerClassName,
        'w-full flex flex-col items-end gap-[2px]',
      ].join(' ')}
    >
      <textarea
        className={[
          className,
          type === 'alert' ? 'alert_input' : '',
          'w-full',
        ].join(' ')}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />

      {shownCount && (
        <p className='text-gray-400 text-sm'>
          {String(text).length}/{maxLength}
        </p>
      )}
    </div>
  );
};

export default Textarea;
