
import { VFC, useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { getStorage, getDownloadURL, ref } from '@firebase/storage';
import { Post } from '@app/core/types/Post';
import { postCardStyles } from '@app/styles';
import { useAppDispatch } from '@app/util/hooks';
import { openProfileModal, setPostInfo } from '@app/core/store/profileModal/profileModalSlice';
import { selectPostInfo, selectProfileModals } from '@app/core/selectors/profileModal';
import { ProfileModal } from '@app/containers/Modals/ProfileModal/ProfileModal';



export const PostCard: VFC<{ post: Post }> = ({ post }) => {
  const dispatch = useAppDispatch();
  const isOpen = useSelector(selectProfileModals);
  const [ppUri, setppUri] = useState('');
  const getPpUri = () => {
    const storage = getStorage();
    const storageRef = ref(storage, post.name);
    getDownloadURL(storageRef).then((url)=>{
      setppUri(url);
    }).catch(()=>{console.log("PostCard Error");});
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPpUri();
  }, [isOpen]);

  const onPress = () => {
    const info = {
      name: post.name,
      date: post.date,
      title: post.title,
      bio: post.bio,
      imgurl: ppUri,
    };
    dispatch(setPostInfo(info));
    dispatch(openProfileModal(true));

  };
  // eslint-disable-next-line no-console
  //console.log(post.message);
  // console.log(post);


  return (
    <View style={ postCardStyles.container }>
      <View style={ postCardStyles.section }>
        <TouchableOpacity
          onPress={ onPress }
          style={{ flexDirection: 'row', flex: 1 }}
        >
          <Text style={ postCardStyles.headerText }>
            {post.name}
            {' '}
            posted:
            {' '}
            {post.title}
            {' '}
            on
            {' '}
            {post.date}

          </Text>
        </TouchableOpacity>

      </View>
      <Text style={ postCardStyles.postText }>
        {post.message}
      </Text>
    </View>
  );
};

