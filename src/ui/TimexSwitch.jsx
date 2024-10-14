'use client';

import Switch from 'react-switch';

const TimexSwitch = ({ checked, onChange }) => {
  return (
    <Switch
      width={44}
      height={24}
      onColor='#6c30ed'
      handleDiameter={20}
      checkedIcon={false}
      uncheckedIcon={false}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default TimexSwitch;
