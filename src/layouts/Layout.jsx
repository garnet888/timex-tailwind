import Header from '@/utils/Header';
import Footer from '@/utils/Footer';

const Layout = ({ children, shownBackground = false }) => {
  return (
    <main className='layout'>
      <Header />

      <div
        className={[
          shownBackground ? 'background_img_2' : '',
          'min-h-content',
        ].join(' ')}
        style={{ gridArea: 'content' }}
      >
        {children}
      </div>

      <Footer />
    </main>
  );
};

export default Layout;
