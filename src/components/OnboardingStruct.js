import React from 'react';
import {
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

const Base = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
        }}>
            
        <KeyboardAvoidingView behavior="padding"></KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export {Base};
