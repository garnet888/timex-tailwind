import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = ({ children }) => {
  return (
    <main className='layout'>
      <Header />

      <main style={{ gridArea: 'content' }} className='min-h-min_content'>
        {children}
      </main>

      <Footer />
    </main>
  );
};

export default Layout;
