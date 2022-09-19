import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { Alert } from 'react-native';


export const handleRegister = (auth: Auth, displayName: string, email: string, password: string, bio: string) => {
  void createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      void updateProfile(user, { displayName: displayName, photoURL: bio }).catch(() => {
        Alert.alert('Invalid display name', 'The email and password you entered are invalid. Try again.', [
          {
            text: 'Ok',
            style: 'cancel',
          },
          {
            text: 'Cancel',
            style: 'destructive',
          }
        ]
        );
      }).then(() => {
        void signOut(getAuth()).then(() => {
          void signInWithEmailAndPassword(auth, email, password).catch(() => {
            Alert.alert('Invalid display name', 'The email and password you entered are invalid. Try again.', [
              {
                text: 'Ok',
                style: 'cancel',
              },
              {
                text: 'Cancel',
                style: 'destructive',
              }
            ]
            );
          });
        });
      });
    })
    .catch(() => {
      Alert.alert('Invalid email/password', 'The email and password you entered are invalid. Try again.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
        {
          text: 'Cancel',
          style: 'destructive',
        }
      ]
      );
    });
};
