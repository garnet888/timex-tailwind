'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';
import { dateFormats } from '@/lib/constants';
import { ChevronArrow } from '@/utils/icons';

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
  value,
  range = false,
  withTime = false,
  alert = false,
  onChange,
  cleaner,
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
    setTimeout(() => ref.current.closeCalendar(), 20);
  };

  const onChangeHandler = (val) => {
    // if (withTime || range) {
    //   setTempValue(val);
    // } else {
    //   if (range && Array.isArray(val)) {
    //     onChange(val.map((item) => new DateObject(item).format(getFormat())));
    //   } else {
    //     onChange(val);
    //   }
    // }

    if (range && Array.isArray(val)) {
      onChange(val.map((item) => new DateObject(item).format(getFormat())));
    } else {
      onChange(val);
    }

    setTempValue(val);
  };

  const doneHandler = () => {
    if (range && Array.isArray(tempValue)) {
      onChange(
        tempValue.map((item) => new DateObject(item).format(getFormat()))
      );
    } else {
      onChange(tempValue);
    }

    hideCalendar();
  };

  const cleanerHandler = () => {
    cleaner();
    setTempValue();

    hideCalendar();
  };

  return (
    <DatePicker
      ref={ref}
      inputClass={[alert ? 'alert_input' : '', 'datePicker_input'].join(' ')}
      placeholder={getRange() ? 'Эхлэх ~ Дуусах' : 'Огноо сонгох...'}
      headerOrder={['LEFT_BUTTON', 'YEAR_MONTH', 'RIGHT_BUTTON']}
      months={MONTHS}
      weekDays={WEEK_DAYS}
      format={getFormat()}
      value={value}
      range={getRange()}
      rangeHover={getRange()}
      numberOfMonths={getRange() && 2}
      plugins={getPlugins()}
      onChange={onChangeHandler}
      onOpen={() => setShouldCloseCalendar(false)}
      onClose={() => (withTime ? shouldCloseCalendar : true)}
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
        <button
          className='normal_btn h-auto px-2 py-0'
          type='button'
          onClick={cleanerHandler}
        >
          Цэвэрлэх
        </button>

        {(withTime || range) && (
          <button
            className='first_btn h-auto px-2 py-0'
            type='button'
            onClick={doneHandler}
          >
            Болсон
          </button>
        )}
      </div>
    </DatePicker>
  );
};

export default TimexDatePicker;
