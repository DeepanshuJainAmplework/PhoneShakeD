import React from 'react';
import {View, Text, Alert, Pressable, StyleSheet} from 'react-native';
import {s} from 'react-native-size-matters';
const HeaderP = ({
  back,
  onPressBack,
  backDisable,
  title,
  onpressSkip,
  SkipDisable,
  SkipText,
}) => {
  return (
    <View style={style.Boxview}>
      <Pressable
        onPress={onPressBack}
        style={{flex: 0.15}}
        disabled={backDisable}>
        <Text style={style.Back}>{back}</Text>
      </Pressable>

      <Text style={style.Title}>{title}</Text>

      <Pressable
        onPress={onpressSkip}
        style={{flex: 0.2}}
        disabled={SkipDisable}>
        <Text style={style.Skip}>{SkipText}</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  Boxview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 30,
  },
  Back: {
    textAlign: 'left',
    color: 'dodgerblue',
    fontSize: 30,
    paddingLeft: s(15),
    fontWeight: '400',
  },
  Title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    textAlignVertical: 'center',
    flex: 0.65,
    fontWeight: '400',
  },
  Skip: {
    textAlign: 'right',
    color: 'dodgerblue',
    fontSize: s(17),
    textAlignVertical: 'center',
    paddingRight:15
  },
});

export default HeaderP;
