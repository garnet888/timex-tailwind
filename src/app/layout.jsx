import LoadBox from '@/ui/LoadBox';

import '../styles/main.css';

export const metadata = {
  description: 'TIMEX | Цаг захиалгын платформ',
  title: {
    default: 'TIMEX',
    template: 'TIMEX | %s',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  const isLoading = false;

  return (
    <html lang='en'>
      <body>
        <LoadBox isLoading={isLoading} />

        {children}
      </body>
    </html>
  );
}
