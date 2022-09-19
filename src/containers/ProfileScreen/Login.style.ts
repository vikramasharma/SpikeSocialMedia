import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    backgroundColor: '#00000040',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    width: '80%',
    borderRadius: 20,
  },
  section: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#00000000',
    justifyContent: 'flex-start',
    padding: '5%',
    height: '25%',
    width: '100%',
  },
  sectionPhoto: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily: 'SpaceMono',
    color: 'black',
    textAlign: 'left',
  },
  textInput: {
    color: 'black',
    borderWidth: 2,
    height: '130%',
    width: 200,
    borderRadius: 5,
    borderColor: '#00000010',
    fontSize: 20,
  },
  button: {
    color:'black',
  },
  buttonSection:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00000000',
    padding: '5%',
    height: '25%',
    width: '100%',
  },
  textHeader: {
    fontSize: 30,
    fontFamily: 'SpaceMono',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
});
