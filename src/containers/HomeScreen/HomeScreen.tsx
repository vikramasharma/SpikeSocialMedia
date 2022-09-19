import { useEffect, VFC, useState } from 'react';
import { View, Button, Text, StyleSheet, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { connectDatabaseEmulator } from 'firebase/database';
import { getStorage, getDownloadURL, ref } from '@firebase/storage';
import { Icon } from 'react-native-elements';

import { useAppDispatch } from '@hooks/index';
import { TabStackScreenProp, TabRoutes } from '@navigation/index';
import { selectAuth, selectAuths, selectLogIn } from '@app/core/selectors';
import { selectPostModals } from '@app/core/selectors/postModal';
import { openModal } from '@app/core/store/postModal/postModalSlice';
import { saveUser, logInOut } from '@app/core/store/auth/authSlice';
import { homeScreenStyles } from '@app/styles';
import { openProfileModal, setPostInfo } from '@app/core/store/profileModal/profileModalSlice';
import { selectPostInfo, selectProfileModals } from '@app/core/selectors/profileModal';
import { ProfileModal } from '@app/containers/Modals/ProfileModal/ProfileModal';

import { NewPostModal } from '../Modals/NewPostModal/NewPostModal';

import { PostContainer } from './PostContainer';


export const HomeScreen: VFC<TabStackScreenProp<TabRoutes.HOME>> = () => {
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const isModals = useSelector(selectPostModals);
  const isLoggedIn = useSelector(selectLogIn);
  const displayName = useSelector(selectAuths);
  const isOpen = useSelector(selectProfileModals);

  const [ppUri, setppUri] = useState('');
  const getPpUri = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, displayName);
    const downloadUrl = await getDownloadURL(storageRef);
    setppUri(downloadUrl);
  };

  useEffect(() => {
    getPpUri().catch(() => { });
  }, [isOpen]);

  const modalInfo = useSelector(setPostInfo);
  const profModal = useSelector(selectProfileModals);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.displayName));
        dispatch(logInOut(true));
        // ...
      }
      else {
        dispatch(saveUser(''));
        dispatch(logInOut(false));
      }
    });

  }, []);

  const onPressPost = () => {
    if (isLoggedIn) {
      dispatch(openModal());
    } else {
      Alert.alert('Cannot Post', 'You have to be logged in to create a new post.', [
        {
          text: 'Ok',
          style: 'cancel',
        }
      ]
      );
    }
  };

  const onPressProfile = () => {

    if (isLoggedIn) {
      const info = {
        name: displayName,
        date: '',
        title: '',
        bio: getAuth().currentUser?.photoURL,
        imgurl: ppUri,
      };
      dispatch(setPostInfo(info));
      dispatch(openProfileModal(true));
    } else {
      Alert.alert('Cannot Open Profile', 'You have to be logged in to view your profile.', [
        {
          text: 'Ok',
          style: 'cancel',
        }
      ]
      );
    }
  };

  return (

    <View style={{ flex: 1, backgroundColor: 'white', alignContent: 'center', marginTop: 7 }}>
      {isModals && <NewPostModal />}
      {profModal && <ProfileModal />}
      <View style={ homeScreenStyles.section }>

        <Icon
          name= 'person'
          color= '#D71E25'
          size = { 17 }
          reverse= { true }
          onPress = { onPressProfile }
        />

        <Text style={ homeScreenStyles.headerText }>NGHQ Spike</Text>

        <Icon
          name= 'add'
          color = '#D71E25'
          size = { 17 }
          reverse= { true }
          onPress = { onPressPost }
        />

      </View>

      <PostContainer />

    </View>
  );
};

