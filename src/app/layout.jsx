import { LoadBox } from '@/ui';
import { ContextProvider } from '@/context/Context';

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
        <ContextProvider>
          <LoadBox />

          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
