import React from "react";
import {View, Image, StyleSheet, Text, Pressable, TouchableOpacity} from 'react-native';
import { s, ms, mvs } from "react-native-size-matters";

const UserInfoIcon=({onPress,source,text, navigation})=>{
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={style.contain}>
            <View style={style.imageView}>
                <Image resizeMode="contain" style={style.Image} source={source}/>
            </View>
            <Text style={style.info}>
                {text}
            </Text>
            
        </View>
        </TouchableOpacity>

    );
};

const style=StyleSheet.create({
    contain:{
        height:ms(100),
        width:s(70),
        alignItems:'center',
        marginBottom:10,
        
    },
    imageView:{
        backgroundColor:'rgba(127 127 127/0.05)',
        flex:0.88,
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },
    Image:{
        height:ms(30),
        width:s(30),
    },
    info:{
        fontSize:s(10),
        color:'rgb(127 127 127)',
        marginTop:ms(6)
        
        
    }

});

export {UserInfoIcon};