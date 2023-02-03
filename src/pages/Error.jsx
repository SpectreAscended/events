import React from 'react';
import { useRouteError } from 'react-router';
import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occured';
  let message = 'Something went wrong!';

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
