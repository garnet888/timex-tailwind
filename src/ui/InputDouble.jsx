'use client';

import { useEffect, useState } from 'react';
import { RangeIcon } from '@/utils/icons';

const InputDouble = ({
  placeholder = ['', ''],
  after,
  type,
  value = ['', ''],
  alert = false,
  disabled = false,
  rounded = false,
  readOnly = false,
  onChange,
}) => {
  const HOVER_INPUT =
    'has-[input:hover]:border has-[input:hover]:border-[rgba(108,48,237,0.48)]';

  const FOCUS_INPUT =
    'has-[input:focus]:outline has-[input:focus]:outline-[3.2px] has-[input:focus]:outline-[rgba(108,48,237,0.32)]';

  const DISABLED_INPUT =
    'has-[input:disabled]:cursor-not-allowed has-[input:disabled]:bg-grey has-[input:disabled]:border-grey';

  const [values, setValues] = useState(value);

  useEffect(() => {
    setValues(value);
  }, [value]);

  const onChangeHandler = (e, index) => {
    const updatedValues = [values[0] || '', values[1] || ''];

    updatedValues[index] = e.target.value ?? '';

    setValues(updatedValues);
    onChange && onChange(updatedValues);
  };

  return (
    <div
      className={[
        'w-full flex justify-between items-center border border-grey rounded-lg',
        rounded === true ? '!rounded_input' : '',
        alert && !disabled ? 'alert_input' : '',
        HOVER_INPUT,
        FOCUS_INPUT,
        disabled ? DISABLED_INPUT : '',
      ].join(' ')}
    >
      <div className='w-full flex items-center'>
        <div className='group relative w-full'>
          <input
            className={[
              'no_input w-full',
              rounded === true ? 'rounded-s-full' : '',
            ].join(' ')}
            placeholder={placeholder[0]}
            type={type}
            value={values[0]}
            readOnly={readOnly}
            onChange={(e) => onChangeHandler(e, 0)}
          />

          {/* <div className='absolute bottom-0 right-0 hidden w-[96.8%] h-[2px] bg-primary group-focus-within:block' /> */}
        </div>

        <RangeIcon color='gray' />

        <div className='group relative w-full'>
          <input
            className={[
              'no_input w-full',
              rounded === true ? 'rounded-e-full' : '',
            ].join(' ')}
            placeholder={placeholder[1]}
            type={type}
            value={values[1]}
            readOnly={readOnly}
            onChange={(e) => onChangeHandler(e, 1)}
          />

          {/* <div className='absolute bottom-0 left-2 hidden w-[96.8%] h-[2px] bg-primary group-focus-within:block' /> */}
        </div>
      </div>

      {after && <span className='pr-[6px]'>{after}</span>}
    </div>
  );
};

export default InputDouble;
