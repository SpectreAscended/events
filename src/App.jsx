import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, {
  loader as eventLoader,
  action as deleteEvent,
} from './pages/EventDetail';
import EventsRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';
import NewEventPage from './pages/NewEvent';
import { action as eventFormAction } from './components/EventForm';
import EditEventPage from './pages/EditEvent';
import SignupPage, { action as signupAction } from './pages/Signup';
import LoginPage from './pages/Login';
import { useAuth } from './contexts/authContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEvent,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: eventFormAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: eventFormAction,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  const { currentUser } = useAuth();
  console.log(currentUser && currentUser);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
