import React from 'react';
import { s } from 'react-native-size-matters';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreenTopTab from './TopTabHomescreen';
import Profile from '../screen/Settings/Profile/Profile';
import { BottomTabIcon } from '../components/Image'; 
import { themedefault } from '../Theme';


const BottomTab = createBottomTabNavigator();

const HomeScreenBottomTab = () => {
  return (
    <BottomTab.Navigator
    initialRouteName='HomeScreenTopTab'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor:themedefault.colors.dogerblue,
        tabBarInactiveTintColor:themedefault.colors.gray,
        tabBarLabelStyle:{fontSize:s(10)}
      }}>
      <BottomTab.Screen
        name="Contacts"
        component={HomeScreenTopTab}
        options={{
          
          tabBarIcon: ({focused}) => <BottomTabIcon source={focused==true?require('../assets/hashIconActive.png'):require('../assets/hashIconInactive.png')} />,
        }}
      />
      <BottomTab.Screen
      
        name="Share"
        component={HomeScreenTopTab}
        options={{
          tabBarIcon: ({focused}) => <BottomTabIcon source={focused==true?require('../assets/qrcodeActive.png'):require('../assets/qrcodeInactive.png')} />,
        }}
      />
      <BottomTab.Screen
        name="Me"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => <BottomTabIcon source={focused==true?require('../assets/atActive.png'):require('../assets/atInactive.png')} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default HomeScreenBottomTab;
