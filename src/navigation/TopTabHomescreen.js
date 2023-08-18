import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ShakeCell from '../screen/Homepages/Shake/ShakeCell';
import Qrcode from '../screen/Homepages/QRCode/Qrcode';
import Share from '../screen/Homepages/Share/Share';
import {
  Pressable,
  View,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {s, ms, mvs} from 'react-native-size-matters';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const TopTab = createMaterialTopTabNavigator();

const HomeScreenTopTab = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{ minHeight:30, backgroundColor: 'white', flexDirection: 'row', }}>
        <View
          style={{
            backgroundColor: 'rgb(247 247 247)',
            flex: 0.92,
            marginLeft: s(12),
            marginRight: s(10),
            borderRadius: s(5),
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <EvilIcon
            name="search"
            size={17}
            color="rgb(168 168 168)"
            style={{marginHorizontal: 10}}
          />

          <TextInput
            placeholder="Search"
            style={{fontSize: s(12), flex: 0.7}}
          />
        </View>
        <View
          style={{
            marginRight: 12,
            alignItems: 'center',
            flex: 0.08,
            justifyContent: 'center',
            backgroundColor: 'rgb(32 142 251)',
            borderRadius: 5,
            maxWidth: 29,
          }}>
          <Pressable onPress={() => Alert.alert('I dont know what to do')}>
            <Text style={{fontSize: 12, color: 'white'}}>7</Text>
          </Pressable>
        </View>
      </View>
      <TopTab.Navigator
        initialRouteName='ShakeCell'
        screenOptions={{
          tabBarActiveTintColor: 'rgb(32 142 251)',
          tabBarInactiveTintColor: 'rgb(168 168 168)',
          tabBarLabelStyle: {fontSize: 14, textTransform: 'none'},
          
        }}>
        <TopTab.Screen
          name="ShakeCell"
          component={ShakeCell}
          options={{
            tabBarLabel: ({focused}) => (
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="vibration"
                  color={focused ? 'rgb(32 142 251)' : 'rgb(168 168 168)'}
                  size={s(18)}
                />
                <Text
                  style={{
                    fontSize: s(14),
                    color: focused ? 'rgb(32 142 251)' : 'rgb(168 168 168)',
                    marginLeft: 5,
                  }}>
                  Shake
                </Text>
              </View>
            ),
          }}
        />
        <TopTab.Screen
          name="Qrcode"
          component={Qrcode}
          options={{
            tabBarLabel: ({focused}) => (
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                  name="qr-code-2"
                  color={focused ? 'rgb(32 142 251)' : 'rgb(168 168 168)'}
                  size={s(18)}
                />
                <Text
                  style={{
                    fontSize: s(14),
                    color: focused ? 'rgb(32 142 251)' : 'rgb(168 168 168)',
                    marginLeft: 5,
                  }}>
                  QR Code
                </Text>
              </View>
            ),
          }}
        />
        <TopTab.Screen
          name="ShareInfo"
          component={Share}
          options={{
            tabBarLabel: ({focused}) => (
              <View style={{flexDirection: 'row'}}>
                <SimpleLineIcons
                  name="paper-plane"
                  color={focused ? 'rgb(32 142 251)' : 'rgb(168 168 168)'}
                  size={s(15)}
                />
                <Text
                  style={{
                    fontSize: s(14),
                    color: focused ? 'rgb(32 142 251)' : 'rgb(168 168 168)',
                    marginLeft: 3,
                  }}>
                  Share
                </Text>
              </View>
            ),
          }}
        />
      </TopTab.Navigator>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({});

export default HomeScreenTopTab;
