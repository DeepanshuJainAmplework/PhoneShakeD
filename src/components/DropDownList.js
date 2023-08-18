import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import { s } from 'react-native-size-matters';

const Selectlist = () => {
  const [selected, setSelected] = useState('');
  const data = [
    {
      key: '1',
      value: 'US +1',
    },
    {
      key: '2',
      value: 'IND +91',
    },
    {
      key: '3',
      value: 'AFG +93',
    },
    {
      key: '4',
      value: 'AUS +61',
    },
  ];
  return (
    <SelectList
      setSelected={val => setSelected(val)}
      data={data}
      save="value"
      placeholder="US +1"
      maxHeight={80}
      boxStyles={{ paddingHorizontal:0, width:s(70), paddingBottom:8, marginLeft:15, borderWidth:0 }}
      dropdownStyles={{borderColor: 'white', position:'absolute',width: 100,top: 40,  height:70, }}
      inputStyles={{color: 'rgb(32 142 251)', fontSize:s(16), }}
      arrowicon={<Text style={{borderWidth:0}}></Text>}
      closeicon={<Text style={{borderWidth:0}}></Text>}
      searchPlaceholder=''
      
    />
  );
};
export {Selectlist};
