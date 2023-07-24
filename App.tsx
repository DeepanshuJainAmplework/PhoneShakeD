/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import Navigation from './src/navigation/Navigation';
const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(()=>{
    SplashScreen.hide()
  },[])


  return (

    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}



export default App;
