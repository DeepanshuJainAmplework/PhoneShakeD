import React from "react";
import {View, Text, Image} from 'react-native';
import Styles from "./Styles";
const ShakeCell=()=>{
    return(
        <View style={Styles.ParentViewiew}>
            <Image source={require('/Users/deepak/Desktop/ReactProject/PhoneShakeD/src/assets/ShakeCell.png')} style={Styles.Img}  />
            <Text style={Styles.txt}>
            Shake your phone with someone, like you'd shake hands!
            </Text>

        </View>

    );
};

export default ShakeCell;