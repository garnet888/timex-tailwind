import { FormElement } from '@/ui';

const OrgaInfo = () => {
  return (
    <div className='flex flex-col gap-3'>
      <FormElement label='First name'>
        <input placeholder='First name' />
      </FormElement>

      <FormElement label='Last name'>
        <input placeholder='Last name' />
      </FormElement>
    </div>
  );
};

export default OrgaInfo;
