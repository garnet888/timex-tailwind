const CheckedOutline = ({ color = '#6C30ED' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M7.87695 12.324L10.3993 14.7174L16.1229 9.28418'
        stroke={color}
        strokeWidth='1.5'
        strokeMiterlimit='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='12'
        cy='12'
        r='8.35'
        stroke={color}
        strokeWidth='1.3'
      />
    </svg>
  );
};

export default CheckedOutline;
