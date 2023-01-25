import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

// Outlet is where children of the Root component element appear
function RootLayout() {
  return <>
    <MainNavigation />
    <main>
      <Outlet />
    </main>

  </>;
}

export default RootLayout;