import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [uid, setUid] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    auth.signOut();
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setLoading(false);
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    if (currentUser) {
      setUid(currentUser.uid);
    }
    localStorage.setItem('user', JSON.stringify(uid));
  }, [uid, currentUser]);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
