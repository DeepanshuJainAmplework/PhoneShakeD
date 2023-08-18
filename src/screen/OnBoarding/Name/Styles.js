import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {s} from 'react-native-size-matters';

const Styles = StyleSheet.create({
  activeBtn: {
    backgroundColor: 'rgb(32 142 251)',
  },
  inactiveBtn: {
    backgroundColor: 'rgba(32 142 251/0.5)',
  },
  ParentViewiew: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  Input: {
    flex: 0.34,
    width: 290,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 18,
    paddingBottom: 8,
    borderBottomColor: 'rgb(168 168 168)',
    borderBottomWidth: 1,
    width: 280,
    textAlign: 'center',
  },
  subText: {
    marginTop: 7,
    fontSize: s(10),
    color: 'rgb(168 168 168)',
    textAlign: 'center',
  },
});

export default Styles;
