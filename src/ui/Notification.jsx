'use client';

import { toast } from 'react-toastify';
import {
  BiSolidCheckCircle,
  BiSolidError,
  BiSolidErrorCircle,
} from 'react-icons/bi';

function renderToast(type, title, desc) {
  let icon = '';

  switch (type) {
    case 'success':
      icon = <BiSolidCheckCircle color='#12B76A' />;
      break;
    case 'warning':
      icon = <BiSolidError color='orange' />;
      break;
    case 'error':
      icon = <BiSolidErrorCircle color='red' />;
      break;
    default:
      icon = null;
  }

  toast(
    <div className='flex gap-[20px]'>
      {icon && <div className='w-[28px] h-[28px] text-2xl'>{icon}</div>}

      <span>
        {title && <b className='font-medium'>{title}</b>}
        {desc && <p className='text-sm font-light'>{desc}</p>}
      </span>
    </div>
  );
}

class Notification {
  static show({ title = '', desc = '' }) {
    renderToast('', title, desc);
  }

  static success({ title = 'Амжилттай', desc = '' }) {
    renderToast('success', title, desc);
  }

  static warning({ title = 'Анхааруулга', desc = '' }) {
    renderToast('warning', title, desc);
  }

  static error({ title = 'Алдаа', desc = '' }) {
    renderToast('error', title, desc);
  }
}

export default Notification;
