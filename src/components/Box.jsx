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
        widthFit ? 'lg:w-fit' : '',
        'flex flex-col gap-4 bg-white rounded-4.5 shadow p-4.5',
      ].join(' ')}
    >
      <div
        className={[
          noDivider ? '' : 'border-b pb-3',
          'flex justify-between items-center',
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
