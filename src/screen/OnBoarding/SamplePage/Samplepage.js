import React from "react";
import { View, Text, TouchableWithoutFeedback, Alert, Image } from "react-native";
import Styles from "./Styles";
import HeaderP from "../../../containers/header";
import { Btn } from "../../../components/Pressable";


const SamplePage=(navigation)=>{
    return(
        
        <View style={Styles.BaseView}>

            <View style={Styles.headView}>
                <HeaderP back='' backDisable={true} onPressBack={null} title='' SkipDisable={false} SkipText='Skip' onpressSkip={()=>(Alert.alert('Skip'))} />
            </View>

            <View style={Styles.SampleView}>
                <Text style={Styles.heading}>
                    Build your Contact Profile
                </Text>
                <Image source={require('/Users/deepak/Desktop/ReactProject/PhoneShakeD/src/assets/Samplepage.png')} style={Styles.SampleImage} />

            </View>
            <View style={{flex:0.11, borderWidth:1, marginTop:10}}>
                <Btn title='Continue' disabled={false} onPress={()=>(Alert.alert('  '))} bgcolor={{}} />
            </View>
        </View>
        

    );
};

export default SamplePage;