'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SlDocs } from 'react-icons/sl';
import Modal from 'react-minimal-modal';
import { Table, Warning } from '@/ui';
import { apiList, callDelete } from '@/axios/api';
import { user } from '@/lib/TableColumns/Admin/User/user';
import { useMainContext } from '@/context/MainContext';
import Box from '@/utils/Box';
import AdminLayout from '@/layouts/AdminLayout';

const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;

const User = ({ title }) => {
  const { setReload } = useMainContext();

  const [shownDoc, setShownDoc] = useState(false);
  const [docs, setDocs] = useState([]);

  const [shownAlert, setShownAlert] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [id, setID] = useState('');

  const deleteHandler = async () => {
    setReload(true);

    await callDelete(`${apiList.admin}/?id=${id}`);
    setReload(false);
  };

  const actionsHandler = (key, data) => {
    switch (key) {
      case 'DOC':
        setShownDoc(true);
        setDocs(data.images);
        break;

      case 'DELETE':
        setAlertText(
          `Та "${
            data.name ? data.name : data.username
          }" харилцагчийг устгахдаа итгэлтэй байна уу?`
        );

        setShownAlert(true);
        setID(data.id);
        break;
    }
  };

  return (
    <AdminLayout>
      <Warning
        visible={shownAlert}
        text={alertText}
        noOnClick={() => setShownAlert(false)}
        yesOnClick={deleteHandler}
      />

      <Modal
        title='Бичиг баримт'
        open={shownDoc}
        className='overflow-auto'
        onClose={() => setShownDoc(false)}
      >
        <div className='grid grid-cols-2 gap-4 pb-6'>
          {docs?.map((doc) => (
            <figure key={doc.id}>
              <Image
                className='w-full h-full object-cover'
                src={IMG_URL + doc}
                alt='image'
                width={100}
                height={100}
                priority
              />
            </figure>
          ))}
        </div>
      </Modal>

      <Box
        title={title}
        noDivider
      >
        <Table
          api='/admin/user'
          columns={user}
          actions={[
            {
              key: 'DOC',
              icon: <SlDocs size={16} />,
              label: 'Бичиг баримт',
            },
            { key: 'DELETE' },
          ]}
          actionsHandler={actionsHandler}
        />
      </Box>
    </AdminLayout>
  );
};

export default User;
