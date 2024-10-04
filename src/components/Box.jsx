const Box = ({ children, title = '', subtitle = '', widthFit = false }) => {
  return (
    <div
      className={[
        widthFit ? 'sm:w-fit' : '',
        'flex flex-col gap-3 bg-white rounded-xl shadow p-[18px]',
      ].join(' ')}
    >
      <div className='flex justify-between items-center border-b pb-2'>
        <h3>{title}</h3>

        {subtitle && <p>{subtitle}</p>}
      </div>

      {children}
    </div>
  );
};

export default Box;
