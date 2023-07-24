
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
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Stack.Navigator screenOptions={() => ({ headerShown: false })}>        
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
