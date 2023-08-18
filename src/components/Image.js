import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import { s, ms } from 'react-native-size-matters';

const ForwardIcon = () => {
  return (
    <Image
      source={require('/../src/assets/ForwardArrow.png')}
      resizeMode="contain"
      style={style.Forwardicon}
    />
  );
};

const LinkedListIcons=({sourceimage})=>{
  return(
    <Image 
    source={sourceimage}
    resizeMode="contain"
    style={style.LLIcons}
    />
  )
}

const BottomTabIcon=({source})=>{
  return(
    <View style={{flex:1}}> 
    <Image
    source={source}
    resizeMode='contain'
    style={{height:ms(22), width:s(22), marginTop:s(5)}}
    />
    </View>
  )
}



const style=StyleSheet.create({
    Forwardicon:{
        height: ms(14), width: s(14), marginRight: 12,
    },
    LLIcons:{
      height:ms(19),
      width:s(19),
      marginLeft:s(12),
      

    }
})

export {ForwardIcon,LinkedListIcons, BottomTabIcon};
