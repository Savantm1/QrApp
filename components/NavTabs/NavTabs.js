import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Profile from '../../Pages/Profile/Profile';
import QRStackScreen from '../../Pages/QrScreen/QrScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingPage from '../../Pages/LoadingPage/LoadingPage';
import AuthentificationStackScreen from '../../Pages/Authentification/Authentification';
import HistoryPage from '../../Pages/HistoryPage/HistoryPage';
import InstructionsPage from '../../Pages/InstructionsPage/InstructionsPage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NavTabs() {
  
  const status  = useSelector(state => state.auth.status);   
  let content;
 
  if(status === 0){
    content = <Stack.Navigator initialRouteName="Loading" screenOptions={{headerShown:false}} >
                <Stack.Screen name="Loading" component={LoadingPage}/> 
              </Stack.Navigator>
  }else if(status === true) {
    content = <Tab.Navigator screenOptions={{headerShown:false,
                tabBarActiveTintColor: '#5DB075',}}
              >
                <Tab.Screen name="QR" component={QRStackScreen}
                  options={{         
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />
                      ),}} />
                <Tab.Screen name="Profile" component={Profile}
                options={{      
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),}} />
                <Tab.Screen name="History" component={HistoryPage}
                options={{         
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="history" color={color} size={size} />
                    ),}} />
                <Tab.Screen name="Information" component={InstructionsPage}
                options={{         
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="information" color={color} size={size} />
                    ),}} />
              </Tab.Navigator>
  } else if( status === false) {
    content = <Stack.Navigator  screenOptions={{headerShown:false}} >
                  <Stack.Screen name="AuthentificationScreens" component={AuthentificationStackScreen} />            
              </Stack.Navigator>
  }

  return (
    <>
      {content}
    </>
  );
}

export default NavTabs;
