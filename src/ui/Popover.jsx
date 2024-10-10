const Popover = ({ content, children, placement = 'BR' }) => {
  /* Placement locations:
    • TL = top left
    • TOP
    • TR = top right
    • RT = right top
    • RIGHT
    • RB = right bottom
    • BR = bottom right
    • BOTTOM
    • BL = bottom left
    • LB = left bottom
    • LEFT
    • LT = left top */

  let place_style = 'right-0'; // default placement (BR)

  switch (placement) {
    case 'TL':
      place_style = 'bottom-full';
      break;
    case 'TOP':
      place_style = 'bottom-full right-1/2 translate-x-1/2';
      break;
    case 'TR':
      place_style = 'bottom-full right-0';
      break;
    case 'RT':
      place_style = 'top-0 left-full';
      break;
    case 'RIGHT':
      place_style = 'top-1/2 -translate-y-1/2 left-full';
      break;
    case 'RB':
      place_style = 'bottom-0 left-full';
      break;
    case 'BOTTOM':
      place_style = 'right-1/2 translate-x-1/2';
      break;
    case 'BL':
      place_style = 'top-full';
      break;
    case 'LB':
      place_style = 'bottom-0 right-full';
      break;
    case 'LEFT':
      place_style = 'top-1/2 -translate-y-1/2 right-full';
      break;
    case 'LT':
      place_style = 'top-0 right-full';
      break;
  }

  return (
    <div className='group select-none relative w-fit'>
      <div className='cursor-pointer active:scale-75 active:duration-500'>
        {content}
      </div>

      <div
        className={[
          place_style,
          String(placement).includes('B') ? 'mt-[6px]' : 'mb-[6px]',
          String(placement).includes('R') ? 'ml-[6px]' : 'mr-[6px]',
          'hidden group-hover:block',
          'absolute z-tooltip bg-white rounded overflow-hidden shadow-tooltip px-2 py-1',
        ].join(' ')}
      >
        {children}
      </div>
    </div>
  );
};

export default Popover;
