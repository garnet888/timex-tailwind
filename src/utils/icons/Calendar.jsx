const Calendar = ({ color = '#1C1C1C' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M3.5 12.0365C3.5 8.83106 3.5 7.22792 4.4962 6.23255C5.4924 5.23718 7.09465 5.23633 10.3 5.23633H13.7C16.9054 5.23633 18.5084 5.23633 19.5038 6.23255C20.4991 7.22877 20.5 8.83106 20.5 12.0365V13.7365C20.5 16.9419 20.5 18.5451 19.5038 19.5404C18.5076 20.5358 16.9054 20.5367 13.7 20.5367H10.3C7.09465 20.5367 5.49155 20.5367 4.4962 19.5404C3.50085 18.5442 3.5 16.9419 3.5 13.7365V12.0365Z'
        stroke={color}
        strokeWidth='1.27501'
      />
      <path
        d='M7.7498 5.23645V3.96143M16.2498 5.23645V3.96143M3.9248 9.48655H20.0748'
        stroke={color}
        strokeWidth='1.27501'
        strokeLinecap='round'
      />
      <path
        d='M17.1004 16.2872C17.1004 16.5126 17.0108 16.7288 16.8514 16.8883C16.692 17.0477 16.4758 17.1372 16.2504 17.1372C16.025 17.1372 15.8088 17.0477 15.6493 16.8883C15.4899 16.7288 15.4004 16.5126 15.4004 16.2872C15.4004 16.0618 15.4899 15.8456 15.6493 15.6861C15.8088 15.5267 16.025 15.4372 16.2504 15.4372C16.4758 15.4372 16.692 15.5267 16.8514 15.6861C17.0108 15.8456 17.1004 16.0618 17.1004 16.2872ZM17.1004 12.8871C17.1004 13.1126 17.0108 13.3288 16.8514 13.4882C16.692 13.6476 16.4758 13.7371 16.2504 13.7371C16.025 13.7371 15.8088 13.6476 15.6493 13.4882C15.4899 13.3288 15.4004 13.1126 15.4004 12.8871C15.4004 12.6617 15.4899 12.4455 15.6493 12.2861C15.8088 12.1267 16.025 12.0371 16.2504 12.0371C16.4758 12.0371 16.692 12.1267 16.8514 12.2861C17.0108 12.4455 17.1004 12.6617 17.1004 12.8871ZM12.8504 16.2872C12.8504 16.5126 12.7608 16.7288 12.6014 16.8883C12.442 17.0477 12.2258 17.1372 12.0004 17.1372C11.775 17.1372 11.5588 17.0477 11.3993 16.8883C11.2399 16.7288 11.1504 16.5126 11.1504 16.2872C11.1504 16.0618 11.2399 15.8456 11.3993 15.6861C11.5588 15.5267 11.775 15.4372 12.0004 15.4372C12.2258 15.4372 12.442 15.5267 12.6014 15.6861C12.7608 15.8456 12.8504 16.0618 12.8504 16.2872ZM12.8504 12.8871C12.8504 13.1126 12.7608 13.3288 12.6014 13.4882C12.442 13.6476 12.2258 13.7371 12.0004 13.7371C11.775 13.7371 11.5588 13.6476 11.3993 13.4882C11.2399 13.3288 11.1504 13.1126 11.1504 12.8871C11.1504 12.6617 11.2399 12.4455 11.3993 12.2861C11.5588 12.1267 11.775 12.0371 12.0004 12.0371C12.2258 12.0371 12.442 12.1267 12.6014 12.2861C12.7608 12.4455 12.8504 12.6617 12.8504 12.8871ZM8.60039 16.2872C8.60039 16.5126 8.51084 16.7288 8.35143 16.8883C8.19203 17.0477 7.97582 17.1372 7.75039 17.1372C7.52496 17.1372 7.30876 17.0477 7.14935 16.8883C6.98994 16.7288 6.90039 16.5126 6.90039 16.2872C6.90039 16.0618 6.98994 15.8456 7.14935 15.6861C7.30876 15.5267 7.52496 15.4372 7.75039 15.4372C7.97582 15.4372 8.19203 15.5267 8.35143 15.6861C8.51084 15.8456 8.60039 16.0618 8.60039 16.2872ZM8.60039 12.8871C8.60039 13.1126 8.51084 13.3288 8.35143 13.4882C8.19203 13.6476 7.97582 13.7371 7.75039 13.7371C7.52496 13.7371 7.30876 13.6476 7.14935 13.4882C6.98994 13.3288 6.90039 13.1126 6.90039 12.8871C6.90039 12.6617 6.98994 12.4455 7.14935 12.2861C7.30876 12.1267 7.52496 12.0371 7.75039 12.0371C7.97582 12.0371 8.19203 12.1267 8.35143 12.2861C8.51084 12.4455 8.60039 12.6617 8.60039 12.8871Z'
        fill={color}
      />
    </svg>
  );
};

export default Calendar;