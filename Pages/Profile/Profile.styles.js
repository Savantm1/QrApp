import {StyleSheet} from 'react-native';
import { border, borderWidth } from 'styled-system';

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor:"white"
  },
  container_center: {
    paddingTop:30,
    alignItems:"center",
    flexDirection: 'column',
    height:"100%",
    justifyContent:"center"
},
  refresh_container: {
    display:"flex",
    justifyContent:"flex-end",
    flexDirection:"row",
    marginTop:30,
    marginRight:30,
    width: "100%"
  },
  refresh_container_ios: {
    display:"flex",
    justifyContent:"flex-end",
    flexDirection:"row",
    marginTop:60,
    marginRight:30,
    width: "100%"
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    paddingTop: 30,
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
  },
  select: {
    backgroundColor:"#5DB075",
    padding:5,
    borderRadius:5,
    display:"flex",
    flexDirection:"row",
  },
  select_text: {
    fontSize:18,
    color: "white"

  },
  select_container: {
    width:1,
    height:1,
    overflow:"hidden"
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    padding: 0,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop:40,
  },
  info_block: {
    width:"90%",
    marginBottom:20
  },
  row: {
      backgroundColor:"#f4f4f4",
      padding:5,
      display:"flex",
      justifyContent: 'space-between',
      flexDirection: "row",
      borderRadius:10,
      marginBottom:10
  },
  row_selector : {
    display:"flex",
    justifyContent: 'space-between',
    flexDirection: "row",
    alignItems:"center"
  },

  row_title: {
      fontWeight:"600",
      fontSize:18
  },
  row_description: {
    fontSize:18
  },
  btn: {
    marginBottom: 12,
    padding: 15,
    borderRadius: 15,
    width: '90%',
    backgroundColor: '#5DB075',
    color:"white",
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
  },


});

export default styles;
