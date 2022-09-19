import { View, ImageBackground, TextInput, Text, KeyboardAvoidingView } from 'react-native';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { handleLogin } from '@app/util/methods/handleLogin';

import Login from './Login.style';


export const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onPressLogin = () => {
    handleLogin(getAuth(), email, password);
  };

  const [isLoaded] = useFonts({
    SpaceMono: require('../../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!isLoaded) {
    return null;
  }

  return (
    //<KeyboardAvoidingView>
    <ImageBackground
      source={ require('../../../assets/images/nghqLogo.png') }
      resizeMode="contain"
      style={ Login.image }
    >
      <View style={ Login.container }>
        <KeyboardAvoidingView>
          <Text style={ Login.textHeader }>Account Login</Text>
          <View style={ Login.section }>
            <Text style={ Login.text }>Email</Text>
            <TextInput
              style={ Login.textInput }
              onChangeText={ (newEmail) => { setEmail(newEmail); } }
              placeholder='Email'
            />
          </View>

          <View style={ Login.section }>
            <Text style={ Login.text }>Password</Text>
            <TextInput
              style={ Login.textInput }
              onChangeText={ (newPass) => { setPassword(newPass); } }
              placeholder='Password'
              secureTextEntry={ true }
            />
          </View>

          <View style={ Login.buttonSection }>
            <Icon
              name='check'
              color='black'
              size={ 17 }
              reverse={ true }
              onPress={ onPressLogin }
              tvParallaxProperties={ undefined }
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};
