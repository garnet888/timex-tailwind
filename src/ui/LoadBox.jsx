'use client';

import LoadingBar from 'react-top-loading-bar';

const LoadBox = ({ isLoading }) => {
  return (
    isLoading && (
      <main className='fixed z-load_box w-full h-full'>
        <LoadingBar
          className='rounded-[0_8px_8px_0]'
          color='var(--primary-color)'
          height={4}
          progress={isLoading ? 60 : 100}
        />

        <div className='w-full h-full flex flex-col justify-center items-center gap-4 bg-[rgba(255,255,255,0.6)]'>
          <span className='load_spinner' />
          <p className='text-primary' style={{ textShadow: '0 1px 2px white' }}>
            Таны хүсэлтийг боловсруулж байна. Түр хүлээнэ үү...
          </p>
        </div>
      </main>
    )
  );
};

export default LoadBox;
