'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImCamera } from 'react-icons/im';
import { useMainContext } from '@/context/MainContext';
import { formatNumberSpace, getValue } from '@/lib/helper';
import { PencilIcon } from '@/utils/icons';
import AdminLayout from '@/layouts/AdminLayout';
import Box from '@/components/Box';
import EditProfile from '@/components/Modals/EditProfile';

const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;

const Profile = ({ title }) => {
  const { userInfo } = useMainContext();

  const [which, setWhich] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = (_which) => {
    setWhich(_which);
    setOpenModal(true);
  };

  return (
    <AdminLayout>
      <EditProfile
        which={which}
        data={userInfo}
        open={openModal}
        setOpen={setOpenModal}
      />

      <Box
        title={title}
        widthFit
      >
        <center>
          <figure className='relative w-[68px] h-[68px]'>
            <Image
              className='w-full h-full object-cover rounded-full'
              src={IMG_URL + userInfo?.profileImage}
              alt='Avatar'
              width={100}
              height={100}
              priority
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/default_avatar.svg';
              }}
            />

            <button
              className='absolute -bottom-1 -right-1 h-auto p-[6px] rounded-full'
              onClick={() => openModalHandler('profile')}
            >
              <ImCamera size={14} />
            </button>
          </figure>
        </center>

        <ul className='w-full flex flex-col gap-3 mt-4'>
          <li className='flex items-center border-b pb-3'>
            <div className='flex flex-col lg:flex-row'>
              <p className='w-40 text-gray-500'>Нэр</p>
              <b className='lg:w-96 font-medium'>
                {userInfo?.lastName} {userInfo?.firstName}
              </b>
            </div>
          </li>

          <li className='relative flex justify-between md:justify-start items-center border-b pb-3'>
            <div className='flex flex-col lg:flex-row'>
              <p className='w-40 text-gray-500'>Утасны дугаар</p>
              <b className='lg:w-96 font-medium'>
                {getValue(userInfo?.phoneNumber)}
              </b>
            </div>

            <button
              className='normal_btn absolute right-0'
              onClick={() => openModalHandler('phoneNumber')}
            >
              <PencilIcon color='var(--primary-color)' />
            </button>
          </li>

          <li className='relative flex justify-between md:justify-start items-center border-b pb-3'>
            <div className='flex flex-col lg:flex-row'>
              <p className='w-40 text-gray-500'>И-Мэйл</p>
              <b className='lg:w-96 font-medium'>{getValue(userInfo?.email)}</b>
            </div>

            <button
              className='normal_btn absolute right-0'
              onClick={() => openModalHandler('email')}
            >
              <PencilIcon color='var(--primary-color)' />
            </button>
          </li>

          <li className='relative flex justify-between md:justify-start items-center border-b pb-3'>
            <div className='flex flex-col lg:flex-row'>
              <p className='w-40 text-gray-500'>Дансны мэдээлэл</p>
              <b className='lg:w-96 font-medium'>
                {formatNumberSpace(getValue(userInfo?.accountNumber))}
              </b>
            </div>

            <button
              className='normal_btn absolute right-0'
              onClick={() => openModalHandler('accountInfo')}
            >
              <PencilIcon color='var(--primary-color)' />
            </button>
          </li>

          <li className='relative flex justify-between sm:justify-start items-center'>
            <div className='flex flex-col lg:flex-row'>
              <p className='w-40 text-gray-500'>Нууц үг</p>
              <b className='lg:w-96 font-medium'>••••••</b>
            </div>

            <button
              className='normal_btn absolute right-0'
              onClick={() => openModalHandler('password')}
            >
              <PencilIcon color='var(--primary-color)' />
            </button>
          </li>
        </ul>
      </Box>
    </AdminLayout>
  );
};

export default Profile;
