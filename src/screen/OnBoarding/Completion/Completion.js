import React, { useEffect, useRef } from 'react';
import {View, Text, TouchableWithoutFeedback, Animated} from 'react-native';
import Styles from './Styles';
import AnimatedEllipsis from 'react-native-animated-ellipsis';

const Completion = ({navigation}) => {
  const animation=useRef(new Animated.Value(0)).current;
  const startAnimation=()=>{
    Animated.spring(animation,{
      toValue:1,
      useNativeDriver:true,
    }).start();

  }
  useEffect(()=>{
    startAnimation();
  }
  );
  return (
    <View style={Styles.ParentViewiew} >
      <Animated.View style={[Styles.Animation,{}]}>
        
        <AnimatedEllipsis
          numberOfDots={3}
          animationDelay={300}
          style={{fontSize: 100, color: 'dodgerblue', letterSpacing: 1}}
          minOpacity={0}
          
        />
      </Animated.View>
      <Text style={Styles.Text}>We are getting your account ready...</Text>
    </View>
  );
};

export default Completion;
