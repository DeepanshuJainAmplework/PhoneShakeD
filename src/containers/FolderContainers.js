import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { s } from 'react-native-size-matters';
const ParentView = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <KeyboardAvoidingView
        style={Styles.ParentViewiew}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {props.children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const HeaderView = props => {
  return <View style={{flex: 0.05, width: '100%', minHeight:7}}>{props.children}</View>;
};


const HeadingView=props=>{
    return(
        <View
          style={{flex: 0.3, justifyContent: 'center', alignItems: 'center', }}>{props.children}</View>
    );
};

const InputView=props=>{
    return(
        <View style={{flex: 0.34, justifyContent: 'center', width: s(290),flexDirection: 'column',
        alignItems: 'center',}}>{props.children}</View>
    )
}

const ButtonView=props=>{
    return(
        <View style={{flex: 0.3, justifyContent: 'center', width: '85%'}}>{props.children}</View>
    )
}

const Styles = StyleSheet.create({
  ParentViewiew: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'  
    
  },
});

export {ParentView,HeaderView,HeadingView,InputView,ButtonView};
