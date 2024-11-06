'use client';

import { useState } from 'react';

const Textarea = ({
  containerClassName = '',
  className = '',
  placeholder = '',
  value,
  rows = 3,
  type,
  shownCount = false,
  maxLength,
  disabled = false,
  onChange,
}) => {
  const [text, setText] = useState('');

  const onChangeHandler = (e) => {
    setText(e.target.value);

    onChange && onChange(e.target.value);
  };

  return (
    <div
      className={[
        'w-full flex flex-col items-end gap-[2px]',
        containerClassName,
      ].join(' ')}
    >
      <textarea
        className={[
          'w-full',
          className,
          type === 'alert' ? 'alert_input' : '',
        ].join(' ')}
        placeholder={placeholder}
        value={value}
        rows={rows}
        maxLength={maxLength}
        disabled={disabled}
        onChange={onChangeHandler}
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
