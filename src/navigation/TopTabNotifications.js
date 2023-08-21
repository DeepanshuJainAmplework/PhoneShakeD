import React from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {s} from 'react-native-size-matters';
import {themedefault} from '../Theme';
import General from '../screen/Notification/General';
import AddedMe from '../screen/Notification/AddedMe';

const TopTab = createMaterialTopTabNavigator();

const NotificationsTopTab = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: themedefault.colors.white}}>
      <TopTab.Navigator
        initialRouteName='General'
        screenOptions={{
          tabBarActiveTintColor: themedefault.colors.dogerblue,
          tabBarInactiveTintColor: themedefault.colors.gray,
          tabBarLabelStyle: {fontSize: s(14), textTransform: 'none', fontWeight:'500'},
          tabBarShowLabel: true,
        }}>
        <TopTab.Screen name="General" component={General} />
        <TopTab.Screen name="Added Me" component={AddedMe} />
      </TopTab.Navigator>
    </SafeAreaView>
  );
};

export default NotificationsTopTab;
