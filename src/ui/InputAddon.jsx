const InputAddon = (props) => {
  const { before, after, alert, disabled } = props;

  let addon_class = 'grid place-content-center bg-grey text-sm px-3';

  if (disabled) {
    addon_class += ' text-gray-500';
  }

  return (
    <div className='w-full flex'>
      {before && (
        <div className={[addon_class, 'rounded-[8px_0_0_8px]'].join(' ')}>
          {before}
        </div>
      )}

      <input
        className={[
          alert ? 'alert_input' : '',
          before ? 'rounded-[0_8px_8px_0]' : '',
          after ? 'rounded-[8px_0_0_8px]' : '',
          before && after ? 'rounded-none' : '',
          'z-10 w-full',
        ].join(' ')}
        {...props}
      />

      {after && (
        <div className={[addon_class, 'rounded-[0_8px_8px_0]'].join(' ')}>
          {after}
        </div>
      )}
    </div>
  );
};

export default InputAddon;
