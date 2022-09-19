import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';


export const handleLogin = (auth: Auth, email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user + ' signed in!');
      // ...
    })
    .catch((error) => {
      console.log("Login Failed");
    });
};
