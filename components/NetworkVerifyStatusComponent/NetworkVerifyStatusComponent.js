import React from 'react'
import NetInfo from "@react-native-community/netinfo";
import {
    useDispatch,
    useSelector
} from 'react-redux';
import NavTabs from '../NavTabs/NavTabs';
import {
    Text
} from 'react-native';
import {
    ChangeNetworkStatus
} from '../../Redux/AuthReducer';
import {
    useState
} from 'react';
import {
    useEffect
} from 'react';
import DisconnectPage from '../DisconnectPage/DisconnectPage';

const NetworkVerifyStatusComponent = () => {

    const [networkStatus, changeNetworkStatus] = useState(true);
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
           
            if (networkStatus != state.isConnected) {
                changeNetworkStatus(state.isConnected);
            }
        });
    })

    if (networkStatus === true) {
        return <NavTabs />
    } else {
        return <DisconnectPage />
    }

}

export default NetworkVerifyStatusComponent;