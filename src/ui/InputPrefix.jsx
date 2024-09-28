const InputPrefix = (props) => {
  const {
    id,
    rounded = false,
    before,
    after,
    alert = false,
    disabled,
    register,
  } = props;

  const HOVER_INPUT =
    'has-[input:hover]:border has-[input:hover]:border-[rgba(108,48,237,0.48)]';

  const FOCUS_INPUT =
    'has-[input:focus]:outline has-[input:focus]:outline-[3.2px] has-[input:focus]:outline-[rgba(108,48,237,0.32)]';

  const DISABLED_INPUT =
    'has-[input:disabled]:cursor-not-allowed has-[input:disabled]:bg-grey has-[input:disabled]:border-grey';

  return (
    <div
      className={[
        rounded ? '!rounded-[58px]' : '',
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
          rounded ? 'rounded_input' : 'rounded_iput',
          'no_input w-full',
        ].join(' ')}
        {...(register ? register(id) : {})}
        {...props}
      />

      {after && <span className='pr-[6px]'>{after}</span>}
    </div>
  );
};

export default InputPrefix;
