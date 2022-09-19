import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    backgroundColor: '#00000030',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    width: '90%',
    borderRadius: 20,
    marginTop: 35,
  },
  section: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#00000000',
    justifyContent: 'flex-start',
    padding: '5%',
    height: '13%',
    width: '100%',
  },
  sectionPhoto: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text:{
    fontFamily: 'SpaceMono',
    color: 'black',
    textAlign: 'left',
  },
  textInput: {
    //fontFamily: 'SpaceMono',
    //flex: 1,
    color: 'black',
    borderWidth: 2,
    height: '60%',
    width: 200,
    borderRadius: 5,
    borderColor: '#00000010',
    fontSize: 20,
  },
  biotextInput: {
    color: 'black',
    borderWidth: 2,
    height: '100%',
    width: 200,
    borderRadius: 5,
    borderColor: '#00000010',
    fontSize: 20,
  },
  button: {
    color:'red',
  },
  buttonSection:{
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#00000000',
    padding: '5%',
    height: '25%',
    width: '100%',
  },
  textHeader: {
    fontSize: 34,
    fontFamily: 'SpaceMono',
    textAlign: 'center',
  },
  photoSection:{
    backgroundColor: '#00000000',
    height: '25%',
    width: '100%',
  },
});
