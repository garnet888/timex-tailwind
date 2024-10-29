'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormElement, DatePicker } from '@/ui';

const schema = yup.object().shape({
  name: yup.string().required('Нэрээ оруулна уу'),
  dates: yup.lazy((value) =>
    Array.isArray(value)
      ? yup
          .array()
          .required('Огноогоо оруулна уу')
          .min(2, 'Огноог бүрэн оруулна уу')
      : yup.string().required('Огноогоо оруулна уу')
  ),
});

const RawDatePicker = () => {
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
      className='flex flex-col gap-4 p-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormElement
        label='Нэр'
        message={errors.name?.message}
      >
        <Controller
          name='name'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <input
              className={errors.name ? 'alert_input' : ''}
              {...field}
            />
          )}
        />
      </FormElement>

      <FormElement
        label='Огноо'
        message={errors.dates?.message}
      >
        <Controller
          name='dates'
          control={control}
          defaultValue={null}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              range
              // withTime
              value={value ? value : {}}
              alert={errors.dates}
              onChange={onChange}
              cleaner={() => setValue('dates', null)}
            />
          )}
        />
      </FormElement>

      <button
        className='mt-2'
        type='submit'
      >
        Submit
      </button>
    </form>
  );
};

export default RawDatePicker;
