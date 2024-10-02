const Checkbox = ({ children, name = '', value, checked, onChange }) => {
  const HTML_FOR = 'checkbox__' + name;

  return (
    <div className='cursor-pointer flex items-center gap-1'>
      <input
        className='cursor-pointer'
        type='checkbox'
        id={HTML_FOR}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />

      <label
        className='cursor-pointer select-none text-sm -mb-[2px]'
        htmlFor={HTML_FOR}
      >
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
