import { ThemeProvider } from '@react-navigation/native';
import React from 'react';
import {View, Text, Alert, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import {s} from 'react-native-size-matters';
import { themedefault } from '../Theme';
const HeaderContainer = ({
  back,
  onPressBack,
  backDisable,
  title,
  onpressSkip,
  SkipDisable,
  SkipText,
  borderbottomwidth,
}) => {
  return (
    <View style={[style.Boxview,{borderBottomWidth:borderbottomwidth}]}>
      <TouchableOpacity
        onPress={onPressBack}
        style={{flex: 0.2}}
        disabled={backDisable}>
        <Text style={style.Back}>{back}</Text>
      </TouchableOpacity>

      <Text style={style.Title}>{title}</Text>

      <TouchableOpacity
        onPress={onpressSkip}
        style={{flex: 0.2}}
        disabled={SkipDisable}>
        <Text style={style.Skip}>{SkipText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  Boxview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
    borderBottomColor:themedefault.colors.lightgray,
    minWidth:35
    
  },
  Back: {
    textAlign: 'left',
    color: 'dodgerblue',
    fontSize:s(17),
    paddingLeft: s(8),
    fontWeight: '400',
  },
  Title: {
    textAlign: 'center',
    color: 'black',
    fontSize: s(20),
    textAlignVertical: 'center',
    flex: 0.65,
    fontWeight: '400',
  },
  Skip: {
    textAlign: 'right',
    color: 'dodgerblue',
    fontSize: s(17),
    textAlignVertical: 'center',
    paddingRight:s(10)
  },
});

export default HeaderContainer;
