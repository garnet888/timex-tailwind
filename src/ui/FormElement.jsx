const FormElement = ({
  children,
  label = '',
  message,
  hideAsterisk = false,
  shownInputAsterrisk = false,
}) => {
  return (
    <div>
      <div className='flex flex-col'>
        <span className='flex'>
          {hideAsterisk || (
            <span className='text-red-500 leading-snug mr-[2px]'>*</span>
          )}
          {label && <p className='text-sm'>{label}</p>}
        </span>

        <span className='flex gap-1'>
          {shownInputAsterrisk && (
            <span className='text-red-500 mr-[2px]'>*</span>
          )}

          {children}
        </span>
      </div>

      {message && (
        <p
          className={[
            'text-red-500 text-sm',
            shownInputAsterrisk ? 'ml-4' : '',
          ].join(' ')}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default FormElement;
