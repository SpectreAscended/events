import { redirect } from 'react-router-dom';

export const getUserID = () => {
  const id = JSON.parse(localStorage.getItem('user'));
  if (!id) {
    return null;
  }

  return id;
};

export const checkAuthLoader = () => {
  const id = getUserID();

  if (!id) {
    return redirect('/login');
  }

  return null;
};
