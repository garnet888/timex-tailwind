const DefaultAvatar = ({ size = 50 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='1' y='1' width='48' height='48' rx='24' fill='#F3F3F3' />
      <rect x='1' y='1' width='48' height='48' rx='24' stroke='#F3F3F3' />
      <path
        d='M35.6647 36.998V34.3314C35.6647 32.9169 35.1028 31.5603 34.1026 30.5601C33.1024 29.56 31.7458 28.998 30.3314 28.998H19.6647C18.2502 28.998 16.8937 29.56 15.8935 30.5601C14.8933 31.5603 14.3314 32.9169 14.3314 34.3314V36.998'
        stroke='#1C1C1C'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M24.9981 23.6647C27.9436 23.6647 30.3314 21.2769 30.3314 18.3314C30.3314 15.3859 27.9436 12.998 24.9981 12.998C22.0525 12.998 19.6647 15.3859 19.6647 18.3314C19.6647 21.2769 22.0525 23.6647 24.9981 23.6647Z'
        stroke='#1C1C1C'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default DefaultAvatar;
