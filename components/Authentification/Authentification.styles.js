import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor:"white"
  },
  c: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor:"red"
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    padding: 30,
  },
  input: {
    margin: 12,
    padding: 10,
    borderRadius: 10,
    width: '90%',
    backgroundColor: '#f0f0f0',
    color:"#808080"
  },
  btn: {
    margin: 12,
    padding: 15,
    borderRadius: 15,
    width: '90%',
    backgroundColor: '#5DB075',
    alignItems: 'center',
  },

});

export default styles;
