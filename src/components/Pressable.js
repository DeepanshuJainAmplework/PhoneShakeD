import React from 'react';
import {Pressable, TouchableOpacity,View, Text} from 'react-native';
import {s, ms} from 'react-native-size-matters';
import { themedefault } from '../Theme';

const Btn = ({onPress, title, bgcolor, disabled}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{alignItems: 'center', justifyContent: 'center', }}
      disabled={disabled}>
      <Text
        style={[
          {
            fontSize: s(16),
            backgroundColor: themedefault.colors.dogerblue,
            color: themedefault.colors.white,            
            width: s(285),
            textAlign: 'center',
            padding:ms(16),
            borderRadius: 5,
            overflow: 'hidden',
            fontWeight:'500',
          },
          bgcolor,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export {Btn};
