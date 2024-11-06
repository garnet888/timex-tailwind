const Box = ({
  children,
  title,
  subtitle = '',
  widthFit = false,
  noDivider = false,
}) => {
  return (
    <div
      className={[
        'flex flex-col gap-4 bg-white rounded-4.5 shadow p-4.5',
        widthFit ? 'lg:w-fit' : '',
      ].join(' ')}
    >
      <div
        className={[
          'flex justify-between items-center',
          noDivider ? '' : 'border-b pb-3',
        ].join(' ')}
      >
        <h3 className='text-xl font-semibold leading-none'>{title}</h3>

        {subtitle && <p>{subtitle}</p>}
      </div>

      {children}
    </div>
  );
};

export default Box;
