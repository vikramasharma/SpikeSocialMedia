
import { Alert } from 'react-native';
import { getDatabase, ref, onValue, set, push, get } from 'firebase/database';
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

import { initFirebase } from '@app/core/network/firebase';
import { handleRegister } from '@app/util/methods/handleRegister';


export const handleName = (auth: Auth, displayName: string, email: string, password: string, bio: string) => {
  const db = getDatabase(initFirebase);
  const nameRef = ref(db, 'users/');
  void get(nameRef).then((snap) => {
    let isValid = true;
    if (snap.exists()) {
      snap.forEach(function (childNodes) {
        if (childNodes.val().username === displayName) {
          // console.log(childNodes.val().username);
          isValid = false;
        }
      });
      if (displayName === '') {
        isValid = false;
      }
      if (isValid) {
        const name = {
          username: displayName,
        };
        push(nameRef, name).catch(() => { return; });
        handleRegister(auth, displayName, email, password, bio);
      }
      else {
        Alert.alert('Invalid display name', 'Please pick a unique/non-empty display name', [
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
      }
    }
  }).catch(() => { return; });
};
