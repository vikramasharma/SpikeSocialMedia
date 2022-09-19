import { StyleSheet } from 'react-native';


export const newPostModalStyles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  postInput:{
    flex: 1,
    width: 200,
    borderColor: '#000000',
    borderWidth: 2,
    borderTopWidth: 0,
    padding: 7,
    textAlignVertical: 'top',
  },
  titleInput:{
    width: 200,
    borderColor: '#000000',
    borderWidth: 2,
    padding: 7,
  },
});
