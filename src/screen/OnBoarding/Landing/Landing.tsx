import React from "react";
import { View, Image, Text, ImageBackground, Pressable, Alert, SafeAreaView } from "react-native";
import { Styles } from "./Style";
import { s, vs } from "react-native-size-matters";
import { Btn } from "../../../components/Pressable";
import { Storage } from "../../../navigation/StackNavigation";

const img = { uri: 'https://cdn.zeplin.io/5b2c0e9a6370866b9f9526d4/assets/A5E46374-3130-4A86-BDB3-DB635DFB663C.png' }



const Landing = ({ navigation }: { navigation: any }) => {
    return (
        <View style={Styles.V}>
            <View style={{ flex: 0.7, alignItems: 'center',  flexDirection:'column-reverse', justifyContent:'center'}}>
                
                <View style={{ marginTop:10 }}>
                    <Text style={Styles.Text1} >
                        Welcome to Phoneshake
                    </Text>
                </View>
                <View >
                    <Image source={img} style={Styles.Img} />
                </View>
            </View>
            <View style={{ flex: 0.3, alignItems: 'center', justifyContent:'center'}}>
                <View >
                    <Btn onPress={() => {navigation.navigate('MobileLogin'); }} title={'Get Started'} disabled={false}
                    bgcolor={{}}/>
                        
                </View>
                <View style={{  marginTop: vs(18) }}>
                    <Text style={Styles.Text2} >
                        Phoneshake for businesses
                    </Text>
                </View>
            </View>
        </View>


    )
}
export default Landing;