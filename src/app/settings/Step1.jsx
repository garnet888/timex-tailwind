import { FormElement } from '@/ui';

const Step1 = () => {
  return (
    <div className='flex flex-col gap-3'>
      <FormElement label='First name'>
        <input placeholder='First name' />
      </FormElement>

      <FormElement label='Last name'>
        <input placeholder='Last name' />
      </FormElement>

      <button
        className='normal_btn'
        // onClick={nextHandler}
      >
        Дараах
      </button>
    </div>
  );
};

export default Step1;
