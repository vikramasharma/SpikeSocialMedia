import { View, ImageBackground, TextInput, Text, Button, KeyboardAvoidingView } from 'react-native';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import UploadImage from '@app/components/UploadImage';
import { handleRegister } from '@app/util/methods/handleRegister';
import { handleName } from '@app/util/methods/handleName';


import CreateAccountStyle from './CreateAccount.style';


export const CreateAccountContainer = () => {
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [displayname, setDisplayName] = useState('');

  const onPress = () => {
    handleName(getAuth(), displayname, email, password, bio);

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
      style={ CreateAccountStyle.image }
    >
      <View style={ CreateAccountStyle.container }>
        <KeyboardAvoidingView>
          <Text style={ CreateAccountStyle.textHeader }>Create Account</Text>
          <UploadImage name={ displayname } />

          <View style={ CreateAccountStyle.section }>
            <Text style={ CreateAccountStyle.text }>Full Name</Text>
            <TextInput
              style={ CreateAccountStyle.textInput }
              onChangeText ={ (newUser) => {
                setDisplayName(newUser);
              } }
              placeholder='Name'
            />
          </View>

          <View style={ CreateAccountStyle.section }>
            <Text style={ CreateAccountStyle.text }>Email</Text>
            <TextInput
              style={ CreateAccountStyle.textInput }
              onChangeText ={ (newEmail) => { setEmail(newEmail); } }
              placeholder='Email'
            />
          </View>

          <View style={ CreateAccountStyle.section }>
            <Text style={ CreateAccountStyle.text }>Password</Text>
            <TextInput
              style={ CreateAccountStyle.textInput }
              secureTextEntry={ true }
              onChangeText ={ (newPass) => { setPassword(newPass); } }
              placeholder='Password'
            />
          </View>
          <View style={ CreateAccountStyle.section }>
            <Text style={ CreateAccountStyle.text }>Bio</Text>
            <TextInput
              style={ CreateAccountStyle.biotextInput }
              onChangeText ={ (newBio) => { setBio(newBio); } }
              placeholder='Bio'
              multiline={ true }
            />
          </View>
          <View style={ CreateAccountStyle.buttonSection }>
            {/* <View style={{ padding:2 }}> */}
            <Button
              title='Create Account'
              onPress={ onPress }
              color='#D71E25'
            />

            {/* </View> */}
          </View>
        </KeyboardAvoidingView>


      </View>


    </ImageBackground>
    //</KeyboardAvoidingView>

  );
};
