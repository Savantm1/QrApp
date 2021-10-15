import {StyleSheet} from 'react-native';
import { border, borderWidth } from 'styled-system';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor:"white"
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
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    borderColor: '#ababab',
    // color:"#5DB075",
  },
  btn: {
    margin: 12,
    padding: 15,
    borderRadius: 15,
    width: '90%',
    backgroundColor: '#5DB075',
    display: "flex",
    alignItems: 'center',
  },

});

export default styles;
