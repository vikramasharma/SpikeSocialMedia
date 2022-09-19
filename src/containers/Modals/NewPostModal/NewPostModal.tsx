import { View, StyleSheet, ImageBackground, ScrollView, Button, Modal, Alert, TextInput, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { getDatabase, ref, onValue, set, push } from 'firebase/database';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { initFirebase } from '@app/core/network/firebase';
import { selectAuths } from '@app/core/selectors';
import { closeModal } from '@app/core/store/postModal/postModalSlice';
import { newPostModalStyles } from '@app/styles';

// import { useDispatch } from "react-redux";

export const NewPostModal = () => {

  const dispatch = useDispatch();

  const name = getAuth().currentUser;

  const db = getDatabase(initFirebase);
  const postRef = ref(db, 'posts/');

  const [state, setState] = useState({
    post: '',
    title: '',
  });

  const handlePost = (e) => {
    e.preventDefault();
    const d = new Date();
    const userData = {
      name: name?.displayName,
      message: state.post,
      title: state.title,
      date: d.getMonth().toString() + '-' + d.getDate().toString() + '-' + d.getFullYear().toString(),
      bio: name?.photoURL,
    };
    dispatch(closeModal());
    push(postRef, userData);
  };

  const handleClose = () => {
    dispatch(closeModal());
  };


  return (

    <Modal
      animationType="slide"
      transparent={ true }
      visible={ true }
    >

      <View style={ newPostModalStyles.modal }>

        <KeyboardAvoidingView behavior='height'>

          <View style={{ backgroundColor:'#dddddd', padding:17, height: 250 }}>

            <TextInput
              style={ newPostModalStyles.titleInput }
              multiline={ false }
              placeholder="What's your topic?"
              value={ state.title }
              onChangeText={ (value) => {setState({ ...state, title:value });} }
            />
            <TextInput
              style={ newPostModalStyles.postInput }
              multiline={ true }
              placeholder="What's on your mind?"
              value={ state.post }
              onChangeText={ (value) => {setState({ ...state, post:value });} }
            />
            <View style={{ padding:6, paddingBottom:0, flexDirection:'row', justifyContent:'space-evenly' }}>

              <Button
                title=" Post "
                onPress={ handlePost }
                color='#D71E25'
              />

              <Button
                title="Close"
                onPress={ handleClose }
                color='#D71E25'
              />

            </View>


          </View>

        </KeyboardAvoidingView>

      </View>

    </Modal>
  );
};
