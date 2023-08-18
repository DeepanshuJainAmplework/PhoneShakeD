import React from "react";
import { StyleSheet } from "react-native";
import { s,ms, mvs } from "react-native-size-matters";


const Styles=StyleSheet.create({
    ParentViewiew:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center'
    },
    
    SampleView:{
        flex:0.8,
        width:'100%',
        alignItems:'center',
        
        
    },
    heading:{
        fontSize:s(20),
        marginBottom:s(10),
        color:'black',
        fontWeight:'500',
        paddingBottom:15

    },
    SampleImage:{
        height:'88%', 
        width:'70%',
        resizeMode:'contain',
        shadowColor:'rgba(0 0 0/0.16)',
        shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.6,

    }

})
export default Styles;