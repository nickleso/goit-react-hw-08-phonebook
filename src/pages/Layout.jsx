import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation';

export const Layout = () => {
  return (
    <>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Navigation />
      </header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
