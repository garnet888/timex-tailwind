import Header from '@/utils/Header';
import Footer from '@/utils/Footer';

const Layout = ({ children }) => {
  return (
    <main className='layout'>
      <Header />

      <div className='min-h-content' style={{ gridArea: 'content' }}>
        {children}
      </div>

      <Footer />
    </main>
  );
};

export default Layout;
