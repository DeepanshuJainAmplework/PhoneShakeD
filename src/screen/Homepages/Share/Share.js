import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PhoneHomepage from './PhoneHomepage';
import EmailHomepage from './EmailHomepage';

const Stack = createNativeStackNavigator();

const Share = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Phone" component={PhoneHomepage} />
      <Stack.Screen name="Email" component={EmailHomepage} />
    </Stack.Navigator>
  );
};

export default Share;
