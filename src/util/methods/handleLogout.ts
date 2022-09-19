import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';


export const handleLogout = () => {
  signOut(getAuth()).catch((error) => {
    // eslint-disable-next-line no-console
    console.log('logout failed');
  });
};
