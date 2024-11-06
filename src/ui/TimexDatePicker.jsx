'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import { dateFormats } from '@/lib/constants';
import { CalendarIcon, ChevronArrow } from '@/utils/icons';
import { InputDouble, InputPrefix } from '.';

const MONTHS = [
  '1-р сар',
  '2-р сар',
  '3-р сар',
  '4-р сар',
  '5-р сар',
  '6-р сар',
  '7-р сар',
  '8-р сар',
  '9-р сар',
  '10-р сар',
  '11-р сар',
  '12-р сар',
];
const WEEK_DAYS = [
  ['Даваа', 'Да'],
  ['Мягмар', 'Мя'],
  ['Лхягва', 'Лх'],
  ['Пүрэв', 'Пү'],
  ['Баасан', 'Ба'],
  ['Бямба', 'Бя'],
  ['Ням', 'Ня'],
];

const TimexDatePicker = ({
  placeholder = '',
  value,
  range = false,
  withTime = false,
  shownCleaner = false,
  alert = false,
  rounded = false,
  onChange,
}) => {
  const ref = useRef();

  const [shouldCloseCalendar, setShouldCloseCalendar] = useState(false);
  const [tempValue, setTempValue] = useState();

  const hangleClickOutside = useCallback((e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      hideCalendar();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', hangleClickOutside);
  }, [hangleClickOutside]);

  useEffect(() => {
    setTempValue(value && value);
  }, [value]);

  useEffect(() => {
    let _value = value;

    if (range) {
      _value = value?.length ? value[0] : value;
    }

    if (shouldCloseCalendar && !_value?.calendar) {
      setTempValue();
    }
  }, [range, shouldCloseCalendar, value]);

  const getPlaceholder = () => {
    if (placeholder) {
      return placeholder;
    }

    if (getRange()) {
      return ['Эхлэх огноо', 'Дуусах огноо'];
    } else {
      return 'Огноо сонгох...';
    }
  };

  const getFormat = () => {
    if (withTime) {
      return dateFormats.WITH_TIME;
    } else {
      return dateFormats.WITHOUT_TIME;
    }
  };

  const getRange = () => {
    /* range ni true bhad tsagnii input-nii utga orohgui bsan tul bichiw */

    if (withTime) {
      return false;
    } else {
      return range;
    }
  };

  const getPlugins = () => {
    const plugins = [];

    if (withTime) {
      plugins.push(<TimePicker position='bottom' />);
    }

    if (plugins.length > 0) {
      return plugins;
    }
  };

  const hideCalendar = () => {
    setShouldCloseCalendar(true);
    setTimeout(() => ref.current?.closeCalendar(), 20);
  };

  const onChangeHandler = (val) => {
    if (withTime || range) {
      setTempValue(val);
    } else {
      onChange(val);
    }
  };

  const doneHandler = () => {
    onChange(tempValue);
    hideCalendar();
  };

  const cleanerHandler = () => {
    onChange();
    setTempValue();

    hideCalendar();
  };

  const renderInput = (inputVal, openCalendar) => {
    let _value = inputVal;

    if (range) {
      _value = String(inputVal).split(' ~ ');
    }

    return (
      <div onClick={openCalendar}>
        {range ? (
          <InputDouble
            placeholder={getPlaceholder()}
            after={
              <CalendarIcon
                color='gray'
                size={20}
              />
            }
            value={_value}
            alert={alert}
            rounded={rounded}
            readOnly
          />
        ) : (
          <InputPrefix
            placeholder={getPlaceholder()}
            after={
              <CalendarIcon
                color='gray'
                size={20}
              />
            }
            value={_value}
            alert={alert}
            rounded={rounded}
            readOnly
          />
        )}
      </div>
    );
  };

  return (
    <>
      <DatePicker
        ref={ref}
        headerOrder={['LEFT_BUTTON', 'YEAR_MONTH', 'RIGHT_BUTTON']}
        highlightToday={false}
        onOpenPickNewDate={false}
        months={MONTHS}
        weekDays={WEEK_DAYS}
        format={getFormat()}
        value={tempValue}
        range={getRange()}
        rangeHover={getRange()}
        fixRelativePosition={0}
        numberOfMonths={getRange() && 2}
        plugins={getPlugins()}
        onChange={onChangeHandler}
        onOpen={() => setShouldCloseCalendar(false)}
        onClose={() => (withTime ? shouldCloseCalendar : true)}
        render={(renValue, openCalendar) => renderInput(renValue, openCalendar)}
        renderButton={(direction, handleClick) => (
          <button
            className='normal_btn h-auto p-1 mx-2'
            onClick={handleClick}
          >
            <ChevronArrow
              rotate={direction}
              color='var(--primary-color)'
            />
          </button>
        )}
      >
        <div className='flex justify-center gap-4 p-[0_16px_16px]'>
          {shownCleaner && (
            <button
              className='normal_btn h-[28px] px-2'
              type='button'
              onClick={cleanerHandler}
            >
              Цэвэрлэх
            </button>
          )}

          {(withTime || range) && (
            <button
              className='first_btn h-[28px] px-2'
              type='button'
              onClick={doneHandler}
            >
              Сонгох
            </button>
          )}
        </div>
      </DatePicker>
    </>
  );
};

export default TimexDatePicker;
