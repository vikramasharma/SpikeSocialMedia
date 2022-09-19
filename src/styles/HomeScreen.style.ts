import { StyleSheet } from 'react-native';


export const homeScreenStyles = StyleSheet.create({
  footerText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 5,
  },
  footerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
});
