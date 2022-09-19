import { StyleSheet } from 'react-native';


export const postCardStyles = StyleSheet.create({
  container: {
    marginTop: 4,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#00000090',
    borderRadius: 7,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 0,
    padding: 5,
  },
  headerText: {
    padding: 2,
    color: 'white',
    flexShrink: 1,
  },
  postText: {
    padding: 7,
    borderTopColor: 'black',
    borderTopWidth: 2,
    color: 'white',
    flexShrink: 1,
  },
});
