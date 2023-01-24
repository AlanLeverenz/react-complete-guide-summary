import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import classes from './Root.module.css';

// Outlet is where children of the Root component element appear
function RootLayout() {
  return <>
    <MainNavigation />
    <main className={classes.content}>
      <Outlet />
    </main>

  </>;
}

export default RootLayout;