const Box = ({
  children,
  title,
  subtitle = '',
  widthFit = false,
  noDivider = false,
  noBodyPadding = false,
}) => {
  return (
    <div
      className={[
        'flex flex-col bg-white rounded-4.5 shadow',
        widthFit ? 'lg:w-fit' : '',
      ].join(' ')}
    >
      <div
        className={[
          'flex justify-between items-center flex-wrap gap-2 p-4.5',
          noDivider ? '' : 'border-b mb-4.5',
        ].join(' ')}
      >
        <h3 className='text-xl font-semibold leading-none'>{title}</h3>

        {subtitle && <p>{subtitle}</p>}
      </div>

      <div className={noBodyPadding ? '' : 'px-4.5 pb-4.5'}>{children}</div>
    </div>
  );
};

export default Box;
