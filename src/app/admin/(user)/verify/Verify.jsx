'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SlDocs } from 'react-icons/sl';
import Modal from 'react-minimal-modal';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import { useMainContext } from '@/context/MainContext';
import { getIfEmpty } from '@/lib/helper';
import { dateFormats } from '@/lib/constants';
import { verifyC } from '@/lib/TableColumns/Admin/User/verifyC';
import { Table } from '@/ui';
import Box from '@/utils/Box';
import AdminLayout from '@/layouts/AdminLayout';
import { apiList, callPost } from '@/axios/api';

const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;

const Verify = ({ title }) => {
  const { setReload } = useMainContext();

  const [shownDoc, setShownDoc] = useState(false);
  const [docs, setDocs] = useState([]);
  const [isReject, setIsReject] = useState(false);
  const [reason, setReason] = useState('');

  const checkFilesOnClick = (type) => {
    setReload(true);

    let accepted = '';

    switch (type) {
      case 'approve':
        accepted = '1';
        break;
      case 'reject':
        accepted = '0';
        break;
    }

    const DATA = { id: docs.id, accepted, reason };

    callPost(`${apiList.admin}/file/check`, DATA).then((res) => {
      if (res?.status) {
        setReload(false);
        setShownDoc(false);
      }
    });
  };

  const onCloseHandler = () => {
    setShownDoc(false);
    setIsReject(false);
    setReason('');
  };

  const actionsHandler = (_, data) => {
    setShownDoc(true);
    setDocs(data);
  };

  return (
    <AdminLayout>
      <Modal
        className='overflow-auto !max-w-fit'
        title='Бичиг баримт'
        open={shownDoc}
        onClose={onCloseHandler}
      >
        <div className='flex flex-col gap-4'>
          <ul>
            <li className='grid grid-cols-2 gap-2'>
              {docs?.lastName && (
                <span>
                  <b className='font-medium'>Овог: </b>
                  <span>{docs.lastName}</span>
                </span>
              )}

              <span>
                <b className='font-medium'>Нэр: </b>
                <span>{getIfEmpty(docs?.firstName)}</span>
              </span>
            </li>

            <li className='grid grid-cols-2 gap-2'>
              <span>
                <b className='font-medium'>РД: </b>
                <span>{getIfEmpty(docs?.registerNo)}</span>
              </span>

              <span>
                <b className='font-medium'>Илгээсэн огноо: </b>
                <span>
                  {getIfEmpty(
                    moment(docs?.updatedAt).format(dateFormats.WITH_TIME)
                  )}
                </span>
              </span>
            </li>
          </ul>

          <div className='grid grid-cols-2 gap-4'>
            {docs?.files?.map((file) => (
              <figure key={uuid()}>
                <Image
                  className='w-full h-full object-cover'
                  src={IMG_URL + file}
                  alt='image'
                  width={100}
                  height={100}
                  priority
                />
              </figure>
            ))}
          </div>

          {isReject ? (
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-1'>
                <b className='font-medium'>Татгалзсан шалтгаанаа сонгоно уу</b>
                <textarea
                  placeholder='Бичих...'
                  rows={3}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>

              <div className='flex justify-center gap-4 mt-2'>
                <button
                  className='normal_btn'
                  onClick={() => setIsReject(false)}
                >
                  Болих
                </button>

                <button onClick={() => checkFilesOnClick('reject')}>
                  Илгээх
                </button>
              </div>
            </div>
          ) : (
            <div className='flex justify-center gap-4 mt-2'>
              <button
                className='normal_btn text-red-500 border-red-500'
                onClick={() => setIsReject(true)}
              >
                Татгалзах
              </button>

              <button onClick={() => checkFilesOnClick('approve')}>
                Баталгаажуулах
              </button>
            </div>
          )}
        </div>
      </Modal>

      <Box title={title} noDivider>
        <Table
          api='/admin/files'
          columns={verifyC}
          actions={[
            {
              key: 'DOC',
              icon: <SlDocs size={16} />,
              label: 'Бичиг баримт',
            },
          ]}
          actionsHandler={actionsHandler}
        />
      </Box>
    </AdminLayout>
  );
};

export default Verify;
