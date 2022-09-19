import { View, ImageBackground, Button, KeyboardAvoidingView, Image, Text } from 'react-native';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { useSelector } from 'react-redux';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { handleLogout } from '@app/util/methods/handleLogout';
import { selectAuths } from '@app/core/selectors';

import CreateAccountStyle from './CreateAccount.style';
import LoggedinStyle from './Loggedin.style';


export const LoggedinContainer = () => {
  const displayName = useSelector(selectAuths);

  const onPressLogout = () => {
    handleLogout();
  };

  const [isLoaded] = useFonts({
    SpaceMono: require('../../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={ require('../../../assets/images/nghqLogo.png') }
      resizeMode="contain"
      style={ CreateAccountStyle.image }
    >
      <View style={ LoggedinStyle.container }>
        <KeyboardAvoidingView>
          <Text style={ LoggedinStyle.textHeader }>
            {displayName}
          </Text>
          <Text
            style={ LoggedinStyle.text }
          >
            {getAuth().currentUser?.photoURL}
          </Text>
          <View style={{ paddingTop:10 }}>
            <Button
              title='Log Out'
              onPress={ onPressLogout }
              color='#D71E25'
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};
