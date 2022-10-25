import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);

export const AuthUserContext = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const signInwithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInwithGithub = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const emailVerification = () => {
    setLoader(true);
    return sendEmailVerification(auth.currentUser);
  };

  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }

      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const authValue = {
    user,
    loader,
    signInwithGoogle,
    signInwithGithub,
    logout,
    createUser,
    updateUserProfile,
    loginUser,
    setLoader,
    emailVerification,
  };
  return (
    <div>
      <AuthUserContext.Provider value={authValue}>
        {children}
      </AuthUserContext.Provider>
    </div>
  );
};

export default AuthContext;
