const ChevronArrow = ({ color = '#1C1C1C', rotate = 'right' }) => {
  const getRotate = () => {
    switch (rotate) {
      case 'down':
        return 'rotate-90';
      case 'top':
        return '-rotate-90';
      case 'left':
        return 'rotate-180';
      default:
        return '';
    }
  };

  return (
    <svg
      className={getRotate()}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Icon'>
        <path
          id='Vector'
          d='M7.5 15L12.5 10L7.5 5'
          stroke={color}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default ChevronArrow;
