import React from "react";
import { StyleSheet } from "react-native";
import { s,ms, mvs } from "react-native-size-matters";


const Styles=StyleSheet.create({
    BaseView:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center'
    },
    headView:{
        flex:0.1,
        width:'100%',
    },
    SampleView:{
        flex:0.8,
        borderWidth:1,
        width:'100%',
        alignItems:'center',
        
    },
    heading:{
        fontSize:s(20),
        marginBottom:s(10),
        color:'black'

    },
    SampleImage:{
        height:'80%', 
        width:'70%',
        resizeMode:'contain'

    }

})
export default Styles;