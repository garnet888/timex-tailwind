'use client';

import { useEffect, useState } from 'react';
import { IoSearchOutline, IoChevronDown, IoClose } from 'react-icons/io5';
import RctSelect, { components } from 'react-select';

const Select = ({
  placeholder = 'Сонгох...',
  options,
  value,
  rounded = false,
  searchable = false,
  hiddenClear = false,
  multiple = false,
  disabled = false,
  onChange,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => setIsMounted(true), []);

  let _placeholder = placeholder;
  let round = '8px';

  if (searchable && !placeholder) {
    _placeholder = 'Сонгох/Хайх...';
  }

  if (rounded) {
    round = '58px';
  }

  const getInitialValue = () => {
    if (options?.length > 0) {
      const find = options.find((item) => item.value === value);

      return find ?? null;
    }
  };

  return (
    <div className='flex justify-center items-center gap-2'>
      {!isMounted || disabled ? (
        <div
          className='cursor-not-allowed w-full h-[36px] flex items-center bg-light_grey text-gray-500 text-sm px-[8px]'
          style={{ borderRadius: round }}
        >
          {getInitialValue() ? getInitialValue().label : _placeholder}
        </div>
      ) : (
        <RctSelect
          styles={CUSTOM_STYLES(round, searchable, isError)}
          components={{
            DropdownIndicator: ({ selectProps }) => (
              <div className='w-[36px] grid place-content-center text-gray-400 text-lg'>
                {searchable && selectProps.menuIsOpen ? (
                  <IoSearchOutline />
                ) : (
                  <IoChevronDown />
                )}
              </div>
            ),
            ClearIndicator: (props) => (
              <components.ClearIndicator {...props}>
                <IoClose
                  className='text-gray-400'
                  size={18}
                />
              </components.ClearIndicator>
            ),
          }}
          placeholder={_placeholder}
          options={options}
          value={getInitialValue()}
          isClearable={!hiddenClear}
          isSearchable={searchable}
          isMulti={multiple}
          isDisabled={disabled}
          onChange={onChange}
        />
      )}

      {/* <p>{getInitialValue()?.value}</p>

      <button onClick={() => setIsError((prev) => !prev)}>
        Toggle Error State
      </button> */}
    </div>
  );
};

const CUSTOM_STYLES = (round, searchable, isError) => {
  function getBorderOutline(_menuIsOpen) {
    if (isError) {
      return {
        border: '1px solid rgba(255, 0, 0, 0.48)',
        outline: '3.2px solid rgba(255, 0, 0, 0.32)',
      };
    }

    if (_menuIsOpen) {
      return {
        border: '1px solid rgba(108, 48, 237, 0.48)',
        outline: '3.2px solid rgba(108, 48, 237, 0.32)',
      };
    } else {
      return {
        border: '1px solid var(--grey-color)',
        outline: 'none',
      };
    }
  }

  function getCursor(_isDisabled, _menuIsOpen, _searchable) {
    if (_isDisabled) {
      return 'not-allowed';
    }

    if (_menuIsOpen && _searchable) {
      return 'text';
    } else {
      return 'pointer';
    }
  }

  return {
    container: (base) => ({
      ...base,
      width: '100%',
    }),
    control: (base, state) => ({
      ...base,
      cursor: getCursor(state.isDisabled, state.menuIsOpen, searchable),
      boxShadow: 'none',
      color: 'var(--dark-color)',
      borderRadius: round,
      border: getBorderOutline(state.menuIsOpen).border,
      outline: getBorderOutline(state.menuIsOpen).outline,
      fontSize: '14px',
      '&:hover': {
        border: '1px solid rgba(108, 48, 237, 0.48)',
      },
    }),
    valueContainer: (base) => ({
      ...base,
      // minHeight: '34px',
      height: '34px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
    }),
    menu: (base) => ({
      ...base,
      marginTop: 4,
      padding: 0,
    }),
    option: (base, state) => ({
      ...base,
      zIndex: 99999,
      cursor: 'pointer',
      height: '28px !important',
      lineHeight: '30px',
      backgroundColor: 'white',
      color: state.isSelected ? 'var(--primary-color)' : 'black',
      padding: '0 8px',
      '&:hover': {
        backgroundColor: 'var(--primary-color)',
        color: 'white',
      },
    }),
    input: (base) => ({
      ...base,
      margin: '0',
      padding: '0',
    }),
    placeholder: (base) => ({
      ...base,
      margin: '0',
      padding: '0',
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: 'var(--primary-color)',
      borderRadius: round,
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: 'white',
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: 'white',
      borderRadius: round,
      ':hover': {
        backgroundColor: 'red',
      },
    }),
    singleValue: (base) => ({
      ...base,
      lineHeight: '34px',
      margin: '0',
      padding: '0',
    }),
  };
};

export default Select;
