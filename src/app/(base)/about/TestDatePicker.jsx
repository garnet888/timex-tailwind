'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormElement, DatePicker } from '@/ui';
import { useState } from 'react';
import moment from 'moment';

const schema = yup.object().shape({
  name: yup.string().required('Нэрээ оруулна уу'),
  date1: yup.lazy((value) =>
    Array.isArray(value)
      ? yup
          .array()
          .required('Огноогоо оруулна уу [1]')
          .min(2, 'Огноог бүрэн оруулна уу [1]')
      : yup.string().required('Огноогоо оруулна уу [1]')
  ),
  date2: yup.lazy((value) =>
    Array.isArray(value)
      ? yup
          .array()
          .required('Огноогоо оруулна уу [2]')
          .min(2, 'Огноог бүрэн оруулна уу [2]')
      : yup.string().required('Огноогоо оруулна уу [2]')
  ),
  date3: yup.lazy((value) =>
    Array.isArray(value)
      ? yup
          .array()
          .required('Огноогоо оруулна уу [3]')
          .min(2, 'Огноог бүрэн оруулна уу [3]')
      : yup.string().required('Огноогоо оруулна уу [3]')
  ),
});

const TestDatePicker = () => {
  const [rawDate, setRawDate] = useState();

  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormElement
        hideAsterisk
        shownInputAsterrisk
        message={errors.name?.message}
      >
        <Controller
          name='name'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <input
              className={[errors.name ? 'alert_input' : '', 'w-full'].join(' ')}
              placeholder='Нэр'
              {...field}
            />
          )}
        />
      </FormElement>

      <FormElement
        label='Огноо 1'
        message={errors.date1?.message}
      >
        <Controller
          name='date1'
          control={control}
          defaultValue={null}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              placeholder='Normal Date'
              value={value}
              alert={errors.date1}
              onChange={onChange}
              shownCleaner
            />
          )}
        />
      </FormElement>

      <FormElement
        label='Огноо 2'
        message={errors.date2?.message}
      >
        <Controller
          name='date2'
          control={control}
          defaultValue={null}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              placeholder={['Range Date Start', 'Range Date End']}
              value={value}
              alert={errors.date2}
              range
              rounded
              onChange={onChange}
              shownCleaner
            />
          )}
        />
      </FormElement>

      <FormElement
        label='Огноо 3'
        message={errors.date3?.message}
      >
        <Controller
          name='date3'
          control={control}
          defaultValue={null}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              placeholder='Time with Date (rounded)'
              value={value}
              alert={errors.date3}
              withTime
              rounded
              onChange={onChange}
              shownCleaner
            />
          )}
        />
      </FormElement>

      <button type='submit'>Submit</button>
    </form>

    // <>
    //   <DatePicker
    //     value={rawDate}
    //     withTime
    //     // range
    //     rounded
    //     onChange={setRawDate}
    //     shownCleaner
    //   />

    //   <button
    //     // onClick={() => alert(moment(new Date(rawDate)).format('YYYY/MM/DD'))}
    //     onClick={() => console.log('BOOOM->', rawDate)}
    //   >
    //     Show Date
    //   </button>
    // </>
  );
};

export default TestDatePicker;
