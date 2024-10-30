import { TbArrowRight } from 'react-icons/tb';

const InputDouble = ({
  placeholder = [],
  after,
  type,
  value = [],
  alert = false,
  disabled = false,
  rounded = false,
  readOnly = false,
}) => {
  const HOVER_INPUT =
    'has-[input:hover]:border has-[input:hover]:border-[rgba(108,48,237,0.48)]';

  const FOCUS_INPUT =
    'has-[input:focus]:outline has-[input:focus]:outline-[3.2px] has-[input:focus]:outline-[rgba(108,48,237,0.32)]';

  const DISABLED_INPUT =
    'has-[input:disabled]:cursor-not-allowed has-[input:disabled]:bg-grey has-[input:disabled]:border-grey';

  return (
    <div
      className={[
        rounded === true ? '!rounded_input' : '',
        alert && !disabled ? 'alert_input' : '',
        HOVER_INPUT,
        FOCUS_INPUT,
        disabled ? DISABLED_INPUT : '',
        'w-full flex justify-between items-center border border-grey rounded-lg',
      ].join(' ')}
    >
      <div className='w-full flex items-center'>
        <div className='group relative w-full'>
          <input
            className={[
              rounded === true ? 'rounded-s-full' : '',
              'no_input w-full',
            ].join(' ')}
            placeholder={placeholder[0]}
            type={type}
            value={value[0]}
            readOnly={readOnly}
          />

          {/* <div className='absolute bottom-0 right-0 hidden w-[96.8%] h-[2px] bg-primary group-focus-within:block' /> */}
        </div>

        <TbArrowRight
          color='gray'
          size={32}
        />

        <div className='group relative w-full'>
          <input
            className={[
              rounded === true ? 'rounded-e-full' : '',
              'no_input w-full',
            ].join(' ')}
            placeholder={placeholder[1]}
            type={type}
            value={value[1] || ''}
            readOnly={readOnly}
          />

          {/* <div className='absolute bottom-0 left-2 hidden w-[96.8%] h-[2px] bg-primary group-focus-within:block' /> */}
        </div>
      </div>

      {after && <span className='pr-[6px]'>{after}</span>}
    </div>
  );
};

export default InputDouble;
