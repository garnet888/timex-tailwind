'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import { dateFormats } from '@/lib/constants';
import { InputAddon, Select } from '@/ui';
import { CleanIcon, SearchingIcon, StarOutline } from '@/utils/icons';
import Box from '@/utils/Box';
import { apiList, callGet } from '@/axios/api';
import AdminLayout from '@/layouts/AdminLayout';

const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;

const EmployeeRate = ({ title }) => {
  const [employees, setEmployees] = useState([]);

  const [employeeID, setEmployeeID] = useState('');
  const [rate, setRate] = useState('');
  const [searchVal, setSearchVal] = useState('');

  const [data, setData] = useState([]);

  useEffect(() => {
    callGet(`${apiList.employee}/option`).then((res) => {
      if (res?.items.length > 0) {
        setEmployees(res.items);
      }
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let apiURL = `${apiList.employee}/rate?sort=-createdAt`;
      let filter = '';

      /* if-uudiin bairshiliig solij bolohgui */
      if (employeeID) {
        filter += `["employeeId","${employeeID}"]`;
      }

      if (rate) {
        if (employeeID) {
          filter += `,["rate","${rate}"]`;
        } else {
          filter += `["rate","${rate}"]`;
        }
      }

      if (searchVal) {
        if (employeeID || rate) {
          filter += `,[["comment","like","${searchVal}"],["OR"],["userNickname","like","${searchVal}"]]`;
        } else {
          filter += `["comment","like","${searchVal}"],["OR"],["userNickname","like","${searchVal}"]`;
        }
      }

      if (filter) {
        apiURL += '&filters=[' + filter + ']';
      }

      const res = await callGet(apiURL);
      setData(res.items);
    };

    fetchData();
  }, [employeeID, rate, searchVal]);

  const resetOnClick = () => {
    setEmployeeID('');
    setRate('');
    setSearchVal('');
  };

  const getEmployeeOptions = () => {
    const options = [];

    if (employees.length > 0) {
      employees.map((item) =>
        options.push({
          value: item.id,
          label: (
            <div className='flex justify-between items-center gap-6'>
              <span className='flex items-center gap-2'>
                <figure className='w-[24px] h-[24px]'>
                  <Image
                    className='w-full h-full object-cover rounded-full'
                    src={
                      item.profileImg
                        ? IMG_URL + item.profileImg
                        : '/default_avatar.svg'
                    }
                    alt='Avatar'
                    width={100}
                    height={100}
                    priority
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/default_avatar.svg';
                    }}
                  />
                </figure>

                <p>{item.nickname}</p>
              </span>

              <span className='flex items-center'>
                <StarOutline color='#F79009' />

                <p>{item.rate.toFixed(1)}</p>
              </span>
            </div>
          ),
        })
      );
    }

    return options;
  };

  const getRateOptions = () => {
    return [...Array(5)].map((_, idx) => {
      const number = idx + 1;

      return {
        value: number,
        label: (
          <div className='flex items-center gap-1'>
            {number}

            <StarOutline color='#F79009' />
          </div>
        ),
      };
    });
  };

  return (
    <AdminLayout>
      <Box
        title={title}
        noDivider
      >
        <div className='flex flex-col lg:flex-row gap-x-8 gap-y-3'>
          <div className='flex flex-col lg:flex-row gap-x-2 gap-y-3'>
            <span className='min-w-[260px] w-full lg:w-auto'>
              <Select
                options={getEmployeeOptions()}
                placeholder='Ажилтан'
                value={employeeID}
                hiddenClear
                onChange={(opt) => setEmployeeID(opt?.value ?? '')}
              />
            </span>

            <span className='min-w-[120px] w-full lg:w-auto'>
              <Select
                options={getRateOptions()}
                placeholder='Үнэлгээ'
                value={rate}
                hiddenClear
                onChange={(opt) => setRate(opt?.value ?? '')}
              />
            </span>
          </div>

          <div className='flex flex-col lg:flex-row gap-x-2 gap-y-5'>
            <InputAddon
              placeholder='Хайх...'
              after={<SearchingIcon />}
              value={searchVal}
              widthFit
              onChange={(e) => setSearchVal(e.target.value)}
            />

            <button
              className='normal_btn gap-1 p-2 mx-auto lg:mx-0'
              onClick={resetOnClick}
            >
              <p className='block lg:hidden'>Цэвэрлэх</p>
              <CleanIcon />
            </button>
          </div>
        </div>

        <ul className='mt-8'>
          {data?.length > 0 ? (
            data.map((item) => (
              <li
                key={uuid()}
                className='flex flex-col text-sm border-t px-4.5 py-3'
              >
                <div className='flex flex-col lg:flex-row lg:gap-1'>
                  <span className='font-semibold'>{item.userNickname}</span>
                  <span className='hidden lg:block'>•</span>

                  <span className='text-primary'>
                    {moment(item.createdAt).format(dateFormats.WITH_TIME)}
                  </span>
                </div>

                <p className='mt-3 mb-2'>{item.comment}</p>

                <div className='flex items-center gap-2'>
                  <figure className='relative w-[32px] h-[32px]'>
                    <Image
                      className='w-full h-full object-cover rounded-full'
                      src={
                        item.profileImg
                          ? IMG_URL + item.profileImg
                          : '/default_avatar.svg'
                      }
                      alt='Avatar'
                      width={100}
                      height={100}
                      priority
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/default_avatar.svg';
                      }}
                    />
                  </figure>

                  <div className=''>
                    <span>{item.nickname}</span>

                    <span className='flex'>
                      {[...Array(item.rate)].map((_) => (
                        <StarOutline
                          key={uuid()}
                          color='#F79009'
                          size={16}
                        />
                      ))}
                    </span>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <center className='font-semibold'>Хоосон байна</center>
          )}
        </ul>
      </Box>
    </AdminLayout>
  );
};

export default EmployeeRate;
