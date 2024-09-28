const FormElement = ({ children, label = '', errorMsg }) => {
  return (
    <div>
      <div className='flex flex-col gap-1'>
        <span>
          {errorMsg && <span className='text-red-500 mr-1'>*</span>}
          {label}
        </span>

        {children}
      </div>

      {errorMsg && <p className='text-red-500 text-sm'>{errorMsg}</p>}
    </div>
  );
};

export default FormElement;
