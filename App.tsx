/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import RNBootSplash from "react-native-bootsplash";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import Navigation from './src/navigation/StackNavigation';
const Stack = createNativeStackNavigator();

const App = () => {


  setTimeout(
    () => RNBootSplash.hide({ duration: 2000 }),
    5000,
  )

   

  return (

    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}



export default App;
