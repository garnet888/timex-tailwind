'use client';

import { useState } from 'react';
import { LiaNotesMedicalSolid } from 'react-icons/lia';
import Modal from 'react-minimal-modal';
import { useMainContext } from '@/context/MainContext';
import { Table, Textarea } from '@/ui';
import { customersC } from '@/lib/TableColumns/customersC';
import Box from '@/utils/Box';
import { apiList, callPost } from '@/axios/api';
import AdminLayout from '@/layouts/AdminLayout';

const Customers = ({ title }) => {
  const { setReload } = useMainContext();

  const [id, setID] = useState('');
  const [note, setNote] = useState('');
  const [shownNote, setShownNote] = useState('');

  const modalOnClose = () => {
    setID('');
    setNote('');

    setShownNote(false);
  };

  const saveNoteOnClick = () => {
    setReload(true);

    callPost(`${apiList.customer}/note`, { id, note }).then((res) => {
      if (res?.status) {
        modalOnClose();
      }

      setReload(false);
    });
  };

  const actionsHandler = (_, data) => {
    setID(data.customerId);
    setNote(data?.notes);

    setShownNote(true);
  };

  return (
    <AdminLayout>
      <Modal title='Тэмдэглэл нэмэх' open={shownNote} onClose={modalOnClose}>
        <Textarea value={note} shownCount maxLength={200} onChange={setNote} />

        <button className='w-full mt-4.5' onClick={saveNoteOnClick}>
          Хадгалах
        </button>
      </Modal>

      <Box title={title} noDivider>
        <Table
          api='/customer'
          customQuery='sort=-firstOrder'
          columns={customersC}
          actionHeader='Тэмдэглэл'
          actions={[
            {
              key: 'NOTE',
              icon: <LiaNotesMedicalSolid size={24} />,
              label: 'Нэмэх',
            },
          ]}
          actionsHandler={actionsHandler}
          // rowOnClick={() => alert('This is row on clicked')}
        />
      </Box>
    </AdminLayout>
  );
};

export default Customers;
