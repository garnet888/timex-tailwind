import Header from '@/utils/Header';
import Footer from '@/utils/Footer';

const Layout = ({ children }) => {
  return (
    <main className='layout'>
      <Header />

      <main style={{ gridArea: 'content' }}>{children}</main>

      <Footer />
    </main>
  );
};

export default Layout;
