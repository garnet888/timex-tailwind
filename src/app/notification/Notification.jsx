'use client';

import { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import { BackedIcon } from '@/ui';
import { dateFormats } from '@/lib/constants';
import { DollIcon, DoubleMailIcon } from '@/utils/icons';
import { apiList, callGet, callPatch, callPost } from '@/axios/api';
import AdminLayout from '@/layouts/AdminLayout';

const Notification = ({ title }) => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(() => {
    callGet(`${apiList.notification}/?sort=-createdAt`).then((res) => {
      if (res?.items?.length > 0) {
        setData(res.items);
      }
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const readAllHandler = () => {
    callPatch(`${apiList.notification}/`).then((res) => {
      if (res?.status) {
        fetchData();
      }
    });
  };

  const actionHandler = (id, val) => {
    callPost(`${apiList.branch}/handle`, {
      id,
      accepted: val,
    }).then((res) => {
      if (res?.status) {
        fetchData();
      }
    });
  };

  return (
    <AdminLayout>
      <header className='w-full h-[40px] flex justify-between items-center rounded-full bg-white text-xl font-semibold px-3'>
        {title}

        <button
          className='text_btn click_effect hidden sm:flex gap-2 text-primary text-sm'
          onClick={readAllHandler}
        >
          <DoubleMailIcon /> Бүгдийг уншсан болгох
        </button>
      </header>

      <button
        className='text_btn click_effect sm:hidden gap-2 text-primary mx-auto my-4.5'
        onClick={readAllHandler}
      >
        <DoubleMailIcon /> Бүгдийг уншсан болгох
      </button>

      <ul className='flex flex-col gap-4 mt-4.5'>
        {data.map((item, idx) => (
          <li
            key={item.id}
            className={[
              idx === data.length - 1 ? '' : 'border-b',
              idx === 0 ? 'border-t sm:border-t-0' : '',
              'relative flex items-center gap-4.5 bg-white shadow rounded-xl px-4.5 py-3',
            ].join(' ')}
          >
            {item.isRead === 0 && (
              <div className='absolute left-0 w-1 h-full bg-primary' />
            )}

            <div className='hidden sm:block'>
              <BackedIcon
                outsideColor='#f7f4ff'
                insideColor='#f1ecff'
              >
                <DollIcon
                  color='var(--primary-color)'
                  fillColor={
                    item.isRead === 0 ? 'var(--primary-color)' : 'none'
                  }
                />
              </BackedIcon>
            </div>

            <div className='flex flex-col gap-3'>
              <div className='text-sm'>
                <div className='flex flex-col lg:flex-row lg:gap-1 mb-3'>
                  <span className='font-semibold'>{item.title}</span>
                  <span className='hidden lg:block'>•</span>

                  <span className='text-primary'>
                    {moment(item.createdAt).format(dateFormats.WITH_TIME)}
                  </span>
                </div>

                <p>{item.content}</p>
              </div>

              {item.actionable && (
                <div className='flex justify-center sm:justify-start gap-3 text-sm'>
                  <button
                    className='normal_btn h-auto py-1'
                    onClick={() => actionHandler(item.link, '0')}
                  >
                    Татгалзах
                  </button>

                  <button
                    className='h-auto py-1'
                    onClick={() => actionHandler(item.link, '1')}
                  >
                    Зөвшөөрөх
                  </button>
                </div>
              )}

              {/* <p
                    className='like_btn !h-auto !text-sm !shadow-none py-1'
                    style={{ background: '#f3473b' }}
                  >
                    Татгалзсан
                  </p>
                  <p
                    className='like_btn !h-auto !text-sm !shadow-none py-1'
                    style={{ background: '#52c341' }}
                  >
                    Зөвшөөрсөн
                  </p> */}
            </div>
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
};

export default Notification;
