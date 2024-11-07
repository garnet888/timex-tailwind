import { Slide, ToastContainer } from 'react-toastify';
import { LoadBox } from '@/ui';
import { BaseProvider } from '@/context/BaseContext';
import { MainProvider } from '@/context/MainContext';
import MiddlewareStatus from '@/lib/MiddlewareStatus';

import '../styles/main.css';

export const metadata = {
  description: 'Timex | Цаг захиалгын платформ',
  title: {
    default: 'Timex',
    template: 'Timex | %s',
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

            <MiddlewareStatus>{children}</MiddlewareStatus>
          </MainProvider>
        </BaseProvider>
      </body>
    </html>
  );
}
