import React from 'react';
import {Pressable, View, Text} from 'react-native';
import {s, ms} from 'react-native-size-matters';

const Btn = ({onPress, title, bgcolor, disabled}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{alignItems: 'center', justifyContent: 'center'}}
      disabled={disabled}>
      <Text
        style={[
          {
            fontSize: s(16),
            backgroundColor: 'dodgerblue',
            color: 'white',
            height: ms(55),
            width: s(285),
            textAlign: 'center',
            padding: 18,
            borderRadius: 5,
            overflow: 'hidden',
          },
          bgcolor,
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export {Btn};
