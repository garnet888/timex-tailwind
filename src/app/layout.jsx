import { LoadBox } from '@/ui';
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
        <MainProvider>
          <LoadBox />

          {children}
        </MainProvider>
      </body>
    </html>
  );
}
