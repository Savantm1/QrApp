import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavTabs from './components/NavTabs/NavTabs';
import { Provider } from 'react-redux';
import store from "./Redux/redux-store";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProfileData, Hydrate } from './Redux/AuthReducer';
import { getUniqueId } from 'react-native-device-info';


const getDataAsyncStorage = async () => {
  try {
    const persistedState = await AsyncStorage.getItem("uid");
    let persUid = await JSON.parse(persistedState);
    console.log("persuid",persUid)
    let phoneSaveState = {
      uid : "",
      status : false
    }
    if(persUid){
      phoneSaveState.uid = persUid;
      phoneSaveState.status = true;
      store.dispatch(Hydrate(phoneSaveState));
      //отправка данных при входе в приложение при наличии данных в телефоне
      let DeviceUniqueId = getUniqueId();
      let uniqueObject = {
        uid: persUid,
        phoneCode: DeviceUniqueId
      }
      console.log("APP",uniqueObject);
        store.dispatch(getProfileData(uniqueObject));
    } else {
      store.dispatch(Hydrate(phoneSaveState));
    }
  } catch (e) {
    console.log(e);
  }
};




let removeFew = async () => {
  const keys = ['uid']
  try {
    await AsyncStorage.multiRemove(keys)
  } catch(e) {
    // remove error
  }

  console.log('Done')
}
// removeFew();


export default function App() {
  getDataAsyncStorage();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavTabs/>
      </NavigationContainer>
    </Provider>
  )
}

store.subscribe( async() => {
  const uid = JSON.stringify(store.getState().auth.uid);
  console.log("UID BEFORE SET ON ASYNC",uid)
  if(uid) {
    await AsyncStorage.setItem("uid",uid);
  }
})