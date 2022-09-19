import { VFC, useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Button, Modal, Alert, TextInput, Text, Image } from 'react-native';
import { getDatabase, ref, onValue, set, push } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { initFirebase } from '@app/core/network/firebase';
import { selectAuths } from '@app/core/selectors';
import { useAppDispatch } from '@app/util/hooks';
import { closeProfileModal, setPostInfo } from '@app/core/store/profileModal/profileModalSlice';
import { selectPostInfo } from '@app/core/selectors/profileModal';




// import { useDispatch } from "react-redux";



export const ProfileModal = () => {
  const dispatch = useAppDispatch();
  const modalInfo = useSelector(selectPostInfo);

  const onPress = () => {
    dispatch(closeProfileModal(false));
  };



  return (
    <Modal
      animationType="slide"
      transparent={ true }
      visible={ true }
    >

      <View style={ styles.modal }>
        <View style={{ backgroundColor: '#dddddd', padding: 17, flex: .45, borderWidth: 3, borderRadius: 10,
          borderBottomColor: 'black', alignItems: 'center', justifyContent: 'space-evenly' }}
        >
          <Text style={{ fontWeight: 'bold' }}>
            {' '}
            {modalInfo.name}
            {' '}
          </Text>
          <Text>
            {' '}
            This is
            {' '}
            {modalInfo.name}
            's bio
          </Text>

          <Text>
            {modalInfo.bio}
          </Text>

          <Image
            source={{ uri: modalInfo.imgurl }}
            style={{ width: 200, height: 150, marginTop: 10, borderRadius: 10, borderWidth: 2, borderColor:'black' }}
          />

          <Button
            title="Close"
            color='#D71E25'
            onPress={ onPress }
          />


        </View>

      </View>

    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
