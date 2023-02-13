import { useRouteError } from 'react-router-dom';

import PageContent from '../components/PageContent';
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {

  // useRouteError returns either a loader/action or render error
  // called from errorElement (in App) for proper error message
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    // gets Response data with its objects (from Events)
    // don't have to parse the message when json is used in Events
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!'
    message = 'Could not find resource or page.'
  }


  return (
    <>
      <MainNavigation />
      <main>
        <PageContent title={title} />
        <p>{message}!</p>
      </main>

    </>
  );
}

export default ErrorPage;