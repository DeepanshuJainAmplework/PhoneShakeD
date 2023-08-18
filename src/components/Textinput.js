import React, { useState } from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';
import {Selectlist} from './DropDownList';
import {s, ms} from 'react-native-size-matters';
import  Fontisto from 'react-native-vector-icons/Fontisto';

const InputText = ({placeholder, onChangeText}) => {
  
  
  return (
    <TextInput
      placeholder={placeholder}
      autoCapitalize="words"
      inputMode="text"
      keyboardType="default"
      onChangeText={onChangeText}
      style={style.inputText}
    />
  );
};

const MobileInputText = ({placeholderMobile, onChangeTextMobile}) => {
  return (
    <View
      style={{
        borderBottomColor: 'rgb(168 168 168)',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width:'93%'
      }}>
      <Selectlist />
      <TextInput
        placeholder={placeholderMobile}
        inputMode="numeric"
        keyboardType="numeric"
        maxLength={10}
        autoCapitalize="none"
        onChangeText={onChangeTextMobile}
        style={style.inputTextMobile}
      />
    </View>
  );
};

const EmailInputText = ({onChangetextemail}) => {
  return (
    <TextInput
      placeholder="Email Address"
      inputMode="email"
      keyboardType="email-address"
      textContentType="emailAddress"
      onChangeText={onChangetextemail}
      style={style.inputText}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};

const BioText=()=>{
  const [fname,setfname]=useState('');
  return(
    <>
    <TextInput
    multiline={true}
    autoCapitalize='sentences'
    placeholder='Write something about yourself...'
   maxLength={150}
    numberOfLines={3}
    style={{ width:'100%', fontSize:s(14), borderBottomWidth:1, justifyContent:'flex-start', height:100, borderBottomColor:'rgb(204 204 204)', width:'93%', padding:10}}
    onChangeText={fname=>setfname(fname)}
    />
    <Text style={{color:'rgb(168 168 168)', textAlign:'right', width:'90%'}}>Character Limit:{fname.length}/150</Text>
    </>
  )
}

const SearchInput=({placeholder})=>{
  return(
    <View  style={{marginVertical:5 ,width:'100%', backgroundColor:'rgb(247 247 247)', flexDirection:'row',alignItems:'center', height:ms(36)}}>
      <Fontisto name='search' style={{paddingHorizontal:10}} color='rgb(168 168 168)' size={14} />
      <TextInput style={{fontSize:s(13),width:'100%'}} placeholder={placeholder}/>

    </View>

  );
};

const style = StyleSheet.create({
  inputText: {
    
    fontSize: s(18),
    paddingBottom: 8,
    borderBottomColor: 'rgb(168 168 168)',
    borderBottomWidth: 1,
    width: '93%',
    textAlign: 'center',
    
  },
  inputTextMobile: {
    fontSize: s(18),
    textAlign: 'left',
    flex: 1,
    paddingRight:10


    
  },
});

export {InputText, MobileInputText, EmailInputText, BioText, SearchInput};
