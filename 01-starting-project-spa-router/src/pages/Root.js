import { Outlet } from 'react-router-dom';

// Outlet is where children of the Root component element appear
function RootLayout() {
  return <>
    <h1>Root Layout</h1>
    <Outlet />
  </>;
}

export default RootLayout;