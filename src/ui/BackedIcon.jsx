const BackedIcon = ({
  children,
  outsideColor = '#f2f3f5',
  insideColor = '#e6e8ea',
}) => {
  return (
    <div
      className='w-[48px] h-[48px] grid place-content-center rounded-full p-1'
      style={{ backgroundColor: outsideColor }}
    >
      <div
        className='w-[36px] h-[36px] grid place-content-center rounded-full p-2'
        style={{ backgroundColor: insideColor }}
      >
        {children}
      </div>
    </div>
  );
};

export default BackedIcon;
