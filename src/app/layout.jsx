import LoadBox from '@/ui/LoadBox';

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
  let isLoading;

  return (
    <html lang='en'>
      <body>
        <LoadBox isLoading={isLoading} />

        {children}
      </body>
    </html>
  );
}
