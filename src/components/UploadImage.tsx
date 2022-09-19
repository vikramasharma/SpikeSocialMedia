/* eslint-disable no-console */
import React, { useState } from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';

import { ProfileImage } from '@app/core/types/image';
import { imageUploaderStyles } from '@app/styles';



export default function UploadImage(props) {
  const [image, setImage] = useState('null');
  //const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const addImage = async () => {
    const _image : ProfileImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).catch(()=>{
      console.log('errors picking image');
    }
    );

    const storage = getStorage();
    const storageRef = ref(storage, props.name);

    console.log(JSON.stringify(_image));

    if (!_image.cancelled) {
      setImage(_image.uri);
      const response = await fetch(_image.uri);
      const img = await response.blob();
      const res = await uploadBytesResumable(storageRef, img);
      console.log(res);
    }
  };

  return (
    <View style={ imageUploaderStyles.container }>
      {
        <Image
          source={{ uri: image }}
          style={{ width: 100, height: 100 }}
        />
      }

      <View style={ imageUploaderStyles.uploadBtnContainer }>
        <TouchableOpacity
          onPress={ addImage }
          style={ imageUploaderStyles.uploadBtn }
        >
          <Text>
            {(Boolean(image)) ? 'Edit' : 'Upload'}
            {' '}
            Image
          </Text>
          <AntDesign
            name="camera"
            size={ 20 }
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>

  );
}
