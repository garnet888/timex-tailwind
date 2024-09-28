const FormElement = ({
  children,
  label = '',
  message,
  hideAsterisk = false,
}) => {
  return (
    <div>
      <div className='flex flex-col gap-1'>
        <span>
          {hideAsterisk || <span className='text-red-500 mr-1'>*</span>}
          {label}
        </span>

        {children}
      </div>

      {message && <p className='text-red-500 text-sm'>{message}</p>}
    </div>
  );
};

export default FormElement;
