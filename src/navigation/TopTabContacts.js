import React from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Contacts from '../screen/Contacts/Contacts';
import Invite from '../screen/Contacts/Invite';
import {s} from 'react-native-size-matters';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {themedefault} from '../Theme';

const TopTab = createMaterialTopTabNavigator();

const ContactsTopTab = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: themedefault.colors.white}}>
      <View
        style={{
          backgroundColor: 'rgb(247 247 247)',
          marginHorizontal: s(12),
          borderRadius: s(5),
          alignItems: 'center',
          flexDirection: 'row',
          minHeight: 30,
          justifyContent: 'center',
        }}>
        <EvilIcon
          name="search"
          size={17}
          color="rgb(168 168 168)"
          style={{marginHorizontal: 10}}
        />

        <TextInput placeholder="Search" style={{fontSize: s(12)}} />
      </View>

      <TopTab.Navigator
        initialRouteName='Contacts'
        screenOptions={{
          tabBarActiveTintColor: themedefault.colors.dogerblue,
          tabBarInactiveTintColor: themedefault.colors.gray,
          tabBarLabelStyle: {fontSize: s(14), textTransform: 'none', fontWeight:'500'},
          tabBarShowLabel: true,
        }}>
        <TopTab.Screen name="Contacts" component={Contacts} />
        <TopTab.Screen name="Invite" component={Invite} />
      </TopTab.Navigator>
    </SafeAreaView>
  );
};

export default ContactsTopTab;
