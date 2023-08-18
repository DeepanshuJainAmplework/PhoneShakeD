import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { s } from 'react-native-size-matters';

const Heading = ({Htext, customView}) => {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>{Htext}</Text>
    </View>
  );
};

const SubText=({text,subtextstyle})=>{
  return(
    <Text style={[styles.subText,subtextstyle]}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  View: 
    {flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
  },
  Text: {
    fontSize: s(20),
    color: 'black',  
    textAlign:'center',
    fontWeight: '500',
  },
  subText:{
    marginTop: 7,
    fontSize: s(10),
    color: 'rgb(168 168 168)',
    textAlign: 'center',  }
});

export {Heading, SubText};
