const InputPrefix = ({
  id,
  placeholder,
  before,
  after,
  type,
  value,
  alert = false,
  disabled = false,
  rounded = false,
  register,
  ...props
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
        'w-full flex justify-between items-center border border-grey rounded-lg',
        rounded === true ? '!rounded_input' : '',
        alert && !disabled ? 'alert_input' : '',
        HOVER_INPUT,
        FOCUS_INPUT,
        disabled ? DISABLED_INPUT : '',
      ].join(' ')}
    >
      {before && <span className='pl-[6px]'>{before}</span>}

      <input
        {...props}
        {...(register ? register(id) : {})}
        className={[
          'no_input w-full',
          rounded === true ? 'rounded_input' : '',
        ].join(' ')}
        placeholder={placeholder}
        type={type}
        value={value}
      />

      {after && <span className='pr-[6px]'>{after}</span>}
    </div>
  );
};

export default InputPrefix;
