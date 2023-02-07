import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import SignupForm from '../components/authentication/SignupForm';
import { useAuth } from '../contexts/authContext';

const SignupPage = () => {
  return <SignupForm method="post" />;
};

export default SignupPage;

export const action = async ({ request }) => {
  // const [error, setError] = useState('');
  const data = await request.formData();
  const userData = {
    userEmail: data.get('email'),
    userPassword: data.get('password'),
    userPasswordConfirm: data.get('confirm-password'),
  };

  console.log(userData.userEmail, userData.userPassword);
  console.log(userData);

  const { signup } = useAuth();
  try {
    await signup(userEmail, userPassword);
    return redirect('/events');
  } catch (err) {}
};
