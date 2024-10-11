import { useEffect, useRef } from 'react';

function MagicCheckbox({ indeterminate, ...rest }) {
  const ref = useRef();

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      ref={ref}
      type='checkbox'
      {...rest}
    />
  );
}

export default MagicCheckbox;
