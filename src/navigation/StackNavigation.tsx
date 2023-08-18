
import 'react-native-gesture-handler';
import React from 'react';

import Landing from '../screen/OnBoarding/Landing/Landing';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MobileLogin from '../screen/OnBoarding/MobileLogin/MobileLogin';
import EmailLogin from '../screen/OnBoarding/EmailLogin/Emaillogin';
import Confirmation from '../screen/OnBoarding/Confirmation/Confirmation';
import Name from '../screen/OnBoarding/Name/Name';
import Org from '../screen/OnBoarding/Organisation/Organisation';
import Designation from '../screen/OnBoarding/Designation/Designation';
import UserName from '../screen/OnBoarding/UserName/UserName';
import TermsData from '../screen/OnBoarding/Terms/Terms';
import { SafeAreaView } from 'react-native';
import SamplePage from '../screen/OnBoarding/SamplePage/Samplepage';
import Completion from '../screen/OnBoarding/Completion/Completion';
import ShakeCell from '../screen/Homepages/Shake/ShakeCell';
import HomeScreenTopTab from './TopTabHomescreen';
import HomeScreenBottomTab from './BottomtabHomescreen';
import SettingList from '../screen/Settings/SettingsList/SettingList';
import UpdateScreen from '../screen/Settings/SettingsList/UpdateInfo';
import LinkedAccounts from '../screen/Settings/OtherSettings/LinkedAccounts/LinkedAccounts';
import UpdateAccountInfo from '../screen/Settings/OtherSettings/LinkedAccounts/updateAccountInfo';
import PrivateAccount from '../screen/Settings/OtherSettings/privateAccount';
import Notifications from '../screen/Settings/OtherSettings/notifications';
import Address from '../screen/Settings/OtherSettings/address';
import SignUpInfo from '../screen/Settings/OtherSettings/signUpInfo';
import BlockedContacts from '../screen/Settings/OtherSettings/blockedContacts';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
        <Stack.Screen name='HomeScreenBottomTab' component={HomeScreenBottomTab} />
        <Stack.Screen name='Options' component={SettingList} />
        <Stack.Screen name='Update' component={UpdateScreen} />
        <Stack.Screen name='LinkedAccounts' component={LinkedAccounts} />        
        <Stack.Screen name='updateAccountInfo' component={UpdateAccountInfo}/>
        <Stack.Screen name='Address' component={Address} />
        <Stack.Screen name='SignUpInfo' component={SignUpInfo} />
        <Stack.Screen name='Privacy' component={PrivateAccount} />
        <Stack.Screen name='Notifications' component={Notifications} />
        <Stack.Screen name='BlockedContacts' component={BlockedContacts} />
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='MobileLogin' component={MobileLogin} />
        <Stack.Screen name='EmailLogin' component={EmailLogin} />
        <Stack.Screen name='Confirmation' component={Confirmation} />
        <Stack.Screen name='Name' component={Name} />
        <Stack.Screen name='Organization' component={Org} />
        <Stack.Screen name='Designation' component={Designation} />
        <Stack.Screen name='UserName' component={UserName} />
        <Stack.Screen name='Terms' component={TermsData} />
        <Stack.Screen name='Completion' component={Completion} />
        <Stack.Screen name='SamplePage' component={SamplePage} />
          
        
        



      </Stack.Navigator>
    </SafeAreaView>

  );
}



export default Navigation;
