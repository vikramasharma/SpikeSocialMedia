import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    backgroundColor: '#00000030',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '40%',
    width: '80%',
    borderRadius: 20,
    marginTop: 35,
  },
  section: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#00000000',
    justifyContent: 'center',
    height: '75%',
    width: '100%',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  text:{
    fontFamily: 'SpaceMono',
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
  textInput: {
    //fontFamily: 'SpaceMono',
    //flex: 1,
    color: 'black',
    borderWidth: 2,
    height: '50%',
    width: '100%',
    borderRadius: 5,
    borderColor: '#00000010',
    fontSize: 20,
  },
  button: {
    color:'red',
  },
  buttonSection:{
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#00000000',
    padding: '5%',
    height: '25%',
    width: '100%',
  },
  textHeader: {
    fontSize: 34,
    fontFamily: 'SpaceMono',
    alignSelf: 'center',
    shadowRadius: 20,
  },
});
