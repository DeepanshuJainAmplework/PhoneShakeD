import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Heading = ({Htext, customView}) => {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>{Htext}</Text>
    </View>
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
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    height: 100,
    fontWeight: '600',
    
    
  },
});

export {Heading};
