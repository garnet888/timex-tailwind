const Box = ({ children, title = '', subtitle = '' }) => {
  return (
    <div className='flex flex-col justify-start items-center gap-3 bg-white rounded-xl shadow p-[18px]'>
      <div>
        <b>{title}</b>
        {subtitle && <p>{subtitle}</p>}
      </div>

      {children}
    </div>
  );
};

export default Box;
