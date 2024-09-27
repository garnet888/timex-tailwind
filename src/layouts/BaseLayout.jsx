import Header from '@/utils/Header';
import Footer from '@/utils/Footer';

const BaseLayout = ({ children, shownBackground = false }) => {
  return (
    <main className='base_layout'>
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

export default BaseLayout;
