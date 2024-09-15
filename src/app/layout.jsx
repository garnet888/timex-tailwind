import '../styles/main.css';

export const metadata = {
  title: 'Цаг захиалгын платформ',
  description: 'TIMEX | Цаг захиалгын платформ',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
