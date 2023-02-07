import { Outlet, useNavigation } from 'react-router-dom';

// useNavigation reflects the transition state, i.e., if loading...

import MainNavigation from '../components/MainNavigation';

// Outlet is where children of the Root component element appear
function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/*navigation.state === 'loading' && <p>Loading...</p> */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;