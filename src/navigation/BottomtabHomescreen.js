import React from 'react';
import {s} from 'react-native-size-matters';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreenTopTab from './TopTabHomescreen';
import Profile from '../screen/Settings/Profile/Profile';
import {BottomTabIcon} from '../components/Image';
import {themedefault} from '../Theme';
import Message from '../screen/Message/Message';
import Notification from '../screen/Notification/General';
import ContactsTopTab from './TopTabContacts';
import NotificationsTopTab from './TopTabNotifications';

const BottomTab = createBottomTabNavigator();

const HomeScreenBottomTab = ({route}) => {
  const screen=route.params.screen;
  return (
    <BottomTab.Navigator
      initialRouteName={screen==true?'Me':'Share'}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: themedefault.colors.dogerblue,
        tabBarInactiveTintColor: themedefault.colors.gray,
        tabBarLabelStyle: {fontSize: s(10)},
      }}>
      <BottomTab.Screen
        name="Contact"
        component={ContactsTopTab}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon
              source={
                focused == true
                  ? require('../assets/hashIconActive.png')
                  : require('../assets/hashIconInactive.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon
              source={
                focused == true
                  ? require('../assets/speechBubbleActive.png')
                  : require('../assets/speechBubbleInactive.png')
              }
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Share"
        component={HomeScreenTopTab}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon
              source={
                focused == true
                  ? require('../assets/qrcodeActive.png')
                  : require('../assets/qrcodeInactive.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationsTopTab}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon
              source={
                focused == true
                  ? require('../assets/notificationActive.png')
                  : require('../assets/notificationInactive.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Me"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon
              source={
                focused == true
                  ? require('../assets/atActive.png')
                  : require('../assets/atInactive.png')
              }
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default HomeScreenBottomTab;
