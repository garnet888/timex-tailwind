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
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
