import { StyleSheet } from 'react-native';


export const imageUploaderStyles=StyleSheet.create({
  container:{
    elevation:2,
    height:100,
    width:100,
    backgroundColor:'#efefef',
    position:'relative',
    borderRadius:999,
    overflow:'hidden',
    alignSelf: 'center',
  },
  uploadBtnContainer:{
    opacity:0.7,
    position:'absolute',
    right:0,
    bottom:0,
    backgroundColor:'lightgrey',
    width:'100%',
    height:'25%',
  },
  uploadBtn:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
});
