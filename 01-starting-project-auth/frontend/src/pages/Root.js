import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  // to get the token
  const token = useLoaderData();
  const submit = useSubmit();

  // useEffect runs whenever token changes
  useEffect(() => {
    if (!token) {
      return;
    }

    // if there is a token, set timeout to 1 hour
    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' })
    }, 1 * 60 * 60 * 1000);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
