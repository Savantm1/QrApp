import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider} from 'react-redux';
import store from "./Redux/redux-store";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProfileData, Hydrate } from './Redux/AuthReducer';
import { getUniqueId } from 'react-native-device-info';
import NetworkVerifyStatusComponent from './components/NetworkVerifyStatusComponent/NetworkVerifyStatusComponent';
import PersonStatusVerifyComponent from './components/PersonStatusVerifyComponent/PersonStatusVerifyComponent';

const getDataAsyncStorage = async () => {
  try {
    const persistedState = await AsyncStorage.getItem("personData");
    let persistedPersonData = JSON.parse(persistedState);

    let phoneSaveState = {
      personData: {},
      status : false
    }
    if(JSON.stringify(persistedPersonData) != "{}" && persistedPersonData != null){
      phoneSaveState.personData = persistedPersonData;

      phoneSaveState.status = true;
      store.dispatch(Hydrate(phoneSaveState));

      //отправка данных при входе в приложение при наличии данных в телефоне
      let DeviceUniqueId = getUniqueId();
      let uniqueObject = {
        uid: persistedPersonData.uid,
        phoneCode: DeviceUniqueId,
      }
      store.dispatch(getProfileData(uniqueObject));
    } else {
      store.dispatch(Hydrate(phoneSaveState));
    }
  } catch (e) {
    console.log(e);
  }
};


// Unsubscribe
// unsubscribe();




let removeFew = async () => {
  const keys = ['personData']
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
            <PersonStatusVerifyComponent removeFew={removeFew}/>
            {/* <NetworkVerifyStatusComponent/> */}
          </NavigationContainer>
        </Provider>
      )

}

store.subscribe( async() => {
  const personData = JSON.stringify(store.getState().auth.personData);

  if(personData) {
    await AsyncStorage.setItem("personData",personData);
  }
})