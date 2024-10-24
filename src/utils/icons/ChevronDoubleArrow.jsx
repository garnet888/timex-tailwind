const ChevronDoubleArrow = ({ color = '#1C1C1C', rotate = 'left', style }) => {
  const getRotate = () => {
    switch (rotate) {
      case 'down':
        return '!-rotate-90';
      case 'top':
        return '!rotate-90';
      case 'right':
        return '!rotate-180';
      default:
        return '';
    }
  };

  return (
    <svg
      className={getRotate()}
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style}
    >
      <g id='Icons'>
        <path
          id='Icon'
          d='M15 14.6653L10.8333 10.4986L15 6.33194M9.16667 14.6653L5 10.4986L9.16667 6.33194'
          stroke={color}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default ChevronDoubleArrow;
