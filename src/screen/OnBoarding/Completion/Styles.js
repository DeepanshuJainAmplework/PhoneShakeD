import React from "react";
import { StyleSheet } from "react-native";
import { s,ms, mvs } from "react-native-size-matters";


const Styles=StyleSheet.create({
    BaseView:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'

    },
    Animation:{
        width:'40%',
        minHeight:60,
        flexDirection:'row'
    },
    Toggle:{
        flex:1/3,
        borderWidth:s(1),
        height:ms(20),
        width:s(20),
        borderRadius:mvs(20),
        margin:16,
        borderColor:'rgb(32 142 251)',
        backgroundColor:'rgb(32 142 251)'
    },
    Text:{
        textAlign:'center',
        fontSize:s(24),
        color:'rgb(32 142 251)',
        width:'60%'

    },

})
export default Styles;