import React from 'react';
import {View, StyleSheet} from 'react-native';
import {s, ms} from 'react-native-size-matters';

const Styles = StyleSheet.create({
  Img: {
    height: ms(80),
    width: s(107),
  },
  ParentViewiew: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt:{
    paddingTop:ms(25),
    fontSize:s(20),
    textAlign:'center',
    width:'82%',
    fontWeight:'400',
    fontFamily:'SanFranciscoText-Medium',
    
  }
});

export default Styles;
