const InputAddon = ({ before, after, alert, disabled, ...props }) => {
  let addon_style = 'grid place-content-center bg-grey text-sm px-3';

  if (disabled) {
    addon_style += ' text-gray-500';
  }

  return (
    <div className='w-full flex'>
      {before && (
        <div className={['rounded-[8px_0_0_8px]', addon_style].join(' ')}>
          {before}
        </div>
      )}

      <input
        {...props}
        className={[
          'z-10 w-full',
          alert ? 'alert_input' : '',
          before ? 'rounded-[0_8px_8px_0]' : '',
          after ? 'rounded-[8px_0_0_8px]' : '',
          before && after ? 'rounded-none' : '',
        ].join(' ')}
      />

      {after && (
        <div className={['rounded-[0_8px_8px_0]', addon_style].join(' ')}>
          {after}
        </div>
      )}
    </div>
  );
};

export default InputAddon;
