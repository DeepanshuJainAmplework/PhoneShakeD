import React from 'react';
import {View, Text, Alert} from 'react-native';
import {s, ms} from 'react-native-size-matters';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Btn } from '../../../components/Pressable';

const OptionSectionfooter = () => {
  return (
    <View
      style={{
        flex: 1,
        
        height: ms(190),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: s(12), color: 'rgb(168 168 168)', textAlign:'center'}}>
        Privacy Policy and Terms of Service
      </Text>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20, width:'40%'}}>
        <EvilIcon name="sc-twitter" size={30}  color="rgb(168 168 168)" />
        <EvilIcon name='sc-facebook' size={s(30)} color="rgb(168 168 168)" />
        <AntDesign name='instagram' size={24} color="rgb(168 168 168)" />
      </View>
    </View>
  );
};

const LinkedAccountsFooter=()=>{
  return(
    <View style={{flex:1, height:ms(280), justifyContent:'center', alignItems:'center'}}>
<Text style={{fontSize:s(20), fontWeight:'600', textAlign:'center',marginBottom:ms(25)}}>Request to add{'\n'} something you don't see here</Text>
<Btn title='Request' onPress={()=>(Alert.alert('A mail is send to add the needful'))}/>
    </View>

  );
};

export {OptionSectionfooter,LinkedAccountsFooter};
