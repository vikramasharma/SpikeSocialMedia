import { View, StyleSheet, ImageBackground, ScrollView, Button, ListRenderItem, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAppDispatch } from '@app/util/hooks';
import { getPosts, updatePosts } from '@app/core/store/post/post.slice';
import { selectisLoading, selectPosts } from '@app/core/selectors';
import { initFirebase } from '@app/core/network/firebase';
import { Post } from '@app/core/types/Post';

import { PostCard } from '../../components/PostCard';

import { styles } from './HomeScreen.style';



export const PostContainer = () => {
  const db = getDatabase(initFirebase);
  const postRef = ref(db, 'posts/');



  const dispatch = useAppDispatch();

  // TODO: Handle errors
  // useEffect(() => {
  //   // eslint-disable-next-line @typescript-eslint/no-empty-function
  //   dispatch(getPosts()).catch(()=>{});

  // });


  const posts = useSelector(selectPosts);


  useEffect(() => {
    return onValue(postRef, (snap) => {
      if (snap.exists()) {
        const data = snap.val();
        dispatch(updatePosts(data));
      }
    });
  }, []);



  return (
    <ImageBackground
      source={ require('../../../assets/images/nghqLogo.png') }
      resizeMode="contain"
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
      }}
    >

      {/* <NewPostModal/> */}
      <FlatList
        data={ Object.keys(posts) }
        renderItem={ ({ item }) => <PostCard post={ posts[item] } /> }
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', minWidth: '97%' }}
      />



    </ImageBackground>
  );
};

