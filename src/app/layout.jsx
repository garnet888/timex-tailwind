import { Slide, ToastContainer } from 'react-toastify';
import { LoadBox } from '@/ui';
import { BaseProvider } from '@/context/BaseContext';
import { MainProvider } from '@/context/MainContext';

import '../styles/main.css';

export const metadata = {
  description: 'TimeX | Цаг захиалгын платформ',
  title: {
    default: 'TimeX',
    template: 'TimeX | %s',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <BaseProvider>
          <MainProvider>
            <LoadBox />
            <ToastContainer
              style={{ zIndex: 'var(--notif-z-index)' }}
              position='top-right'
              autoClose={2000}
              transition={Slide}
              hideProgressBar
            />

            {children}
          </MainProvider>
        </BaseProvider>
      </body>
    </html>
  );
}
