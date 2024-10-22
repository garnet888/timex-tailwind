const InputPrefix = ({
  id,
  before,
  after,
  type,
  value,
  alert = false,
  disabled = false,
  rounded = false,
  register,
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
      {before && <span className='pl-[6px]'>{before}</span>}

      <input
        className={[
          rounded === true ? 'rounded_input' : '',
          'no_input w-full',
        ].join(' ')}
        type={type}
        value={value}
        {...(register ? register(id) : {})}
      />

      {after && <span className='pr-[6px]'>{after}</span>}
    </div>
  );
};

export default InputPrefix;
