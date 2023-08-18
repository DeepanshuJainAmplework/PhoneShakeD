import React from 'react';
import {StyleSheet} from 'react-native';
import {s, ms} from 'react-native-size-matters';
import { themedefault } from '../../../Theme';

const style = StyleSheet.create({
  TitleText: {
    fontSize: s(12),
    color: 'rgb(168 168 168)',
    marginTop: ms(12),
    marginLeft: s(10),
    marginBottom: ms(6),
    
  },
  ItemText: {
    fontSize: s(16),
    color: themedefault.colors.black,
    marginTop: ms(15),
    marginLeft: s(16),
    marginBottom: ms(14),
    
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Itemid:{
    fontSize: s(14),
    color:'rgb(168 168 168)',
    textAlign:'right',
    flex:0.95,
  }
});

export default style;
