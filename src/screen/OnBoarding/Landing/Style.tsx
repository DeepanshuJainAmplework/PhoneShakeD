import React from "react";
import { StyleSheet } from "react-native";
import { s, vs, ms, mvs} from "react-native-size-matters"; 

const Styles=StyleSheet.create({
    V:{
        flex:1, backgroundColor:'white', alignItems:'center',
    },
    Text1:{
        fontSize:s(30), width:200, alignContent:'center', textAlign:'center', color:'black',
    },
    Pressable:{
        fontSize:s(16), backgroundColor:'#1e90ff', color:'white', height:55, width:285, textAlign:'center', padding:18,  borderRadius:5, overflow:'hidden'
    },
    
    Text2:{
        fontSize:s(14), color:'#1e90ff', 
    },
    Img:{
        height:vs(120), width:s(120),  marginBottom:vs(10)
    }


}
)

export {Styles};