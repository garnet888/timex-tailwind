'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Modal from 'react-minimal-modal';
import { v4 as uuid } from 'uuid';
import { Table } from '@/ui';
import { employeeC } from '@/lib/TableColumns/Admin/employeeC';
import { getIfEmpty } from '@/lib/helper';
import { apiList, callGet } from '@/axios/api';
import AdminLayout from '@/layouts/AdminLayout';
import Box from '@/utils/Box';

const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;

const Employee = ({ title }) => {
  const [shownInfo, setShownInfo] = useState(false);
  const [id, setID] = useState('');
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (id && shownInfo) {
      callGet(`${apiList.admin}/user/info?id=${id}`).then((res) => {
        if (res?.status) {
          setInfo(res.data);
        }
      });
    } else {
      setInfo({});
    }
  }, [id, shownInfo]);

  const shownInfoHandler = (id) => {
    setID(id);
    setShownInfo(true);
  };

  const closeInfoHandler = () => {
    setID('');
    setShownInfo(false);
  };

  return (
    <AdminLayout>
      <Modal
        className='overflow-auto !max-w-fit'
        title='Ажилтаны мэдээлэл'
        open={shownInfo}
        onClose={closeInfoHandler}
      >
        <div className='flex flex-col gap-4'>
          {info?.images?.length > 0 && (
            <div className='flex flex-col gap-1'>
              <b className='font-medium'>Иргэний үнэмлэхийн зураг:</b>

              <span className='flex flex-col gap-2 sm:grid grid-cols-2 sm:gap-4'>
                {info.images.map((image) => (
                  <figure key={uuid()} className='sm:w-auto sm:h-[240px]'>
                    <Image
                      className='w-full h-full object-cover'
                      src={image ? IMG_URL + '/' + image : ''}
                      alt='image'
                      width={1000}
                      height={1000}
                      priority
                    />
                  </figure>
                ))}
              </span>
            </div>
          )}

          <ul className='flex flex-col gap-1 pb-4 sm:pb-0'>
            <figure className='w-[48px] h-[48px]'>
              <Image
                className='w-full h-full object-cover rounded-full'
                src={info?.image ? IMG_URL + info.image : '/default_avatar.svg'}
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

            <li className='flex flex-col sm:grid grid-cols-2 gap-1 sm:gap-6'>
              <span>
                <b className='font-medium'>Овог: </b>
                <span>{getIfEmpty(info?.lastname)}</span>
              </span>

              <span>
                <b className='font-medium'>Нэр: </b>
                <span>{getIfEmpty(info?.firstname)}</span>
              </span>
            </li>

            <li className='flex flex-col sm:grid grid-cols-2 gap-1 sm:gap-6'>
              <span>
                <b className='font-medium'>РД: </b>
                <span>{getIfEmpty(info?.registerNo)}</span>
              </span>

              <span>
                <b className='font-medium'>Мэргэжил: </b>
                <span>{getIfEmpty(info?.profession)}</span>
              </span>
            </li>

            <li className='flex flex-col sm:grid grid-cols-2 gap-1 sm:gap-6'>
              <span>
                <b className='font-medium'>Туршлага: </b>
                <span>
                  {info?.experience
                    ? `${info.experience} жил`
                    : getIfEmpty(info.experience)}
                </span>
              </span>
            </li>

            <li className='flex flex-col sm:grid grid-cols-2 gap-1 sm:gap-6'>
              <span>
                <b className='font-medium'>Facebook линк: </b>
                <span>{getIfEmpty(info?.facebookLink)}</span>
              </span>

              <span>
                <b className='font-medium'>Instagram: </b>
                <span>{getIfEmpty(info?.instagram)}</span>
              </span>
            </li>
          </ul>
        </div>
      </Modal>

      <Box title={title} noDivider>
        <Table
          api='/admin/employee'
          columns={employeeC}
          rowOnClick={(data) => shownInfoHandler(data.id)}
        />
      </Box>
    </AdminLayout>
  );
};

export default Employee;
