import React from "react";
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";
import Styles from "./Styles";

const Completion=({navigation})=>{
    return(
        <TouchableWithoutFeedback 
        onPress={()=>(navigation.navigate('SamplePage'))}>
        <View style={Styles.BaseView}>
            <View style={Styles.Animation}>
                <View style={Styles.Toggle}>

                </View>
                <View style={Styles.Toggle}>
                    
                </View>
                <View style={[Styles.Toggle,{backgroundColor:'white'}]}>
                    
                </View>

            </View>
            <Text style={Styles.Text}>
                We are getting your account ready...
            </Text>
        </View>
        </TouchableWithoutFeedback>

    );
};

export default Completion;