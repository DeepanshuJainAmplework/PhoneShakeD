import React from "react";
import { StyleSheet } from "react-native";
import { s,ms,mvs } from "react-native-size-matters";

const Styles=StyleSheet.create({
    activeBtn:{
        backgroundColor:'#1e90ff'
    },
    inActiveBtn:{
        backgroundColor:'rgba(32 142 251/0.5)'
    },
    ParentViewiew:{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',       
    },
    head:{
        fontSize: s(20),
        color: 'black',
        textAlign: 'center',
        width: s(194),
        fontWeight: '500',
    },
    emailPressable:{
        width: 285,
        height: 36,
        marginTop: 8
    },
    emailText:{
        textAlign: 'center',
        padding: 8,
        color: 'rgb(32 142 251)',
    },
    Input:{
        borderBottomColor: 'rgb(168 168 168)',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    inputTextMobile:{
        fontSize: 18,
        textAlign: 'center',
        flex: 0.8,
    },
    inputTextEmail:{
        fontSize: s(18),
        width: 250,
        textAlign: 'center',
        borderBottomWidth:1,
        borderBottomColor: 'rgb(168 168 168)',
        paddingBottom:8
    },
    subText:{
      marginTop: 7,
      fontSize: s(10),
      color: 'rgb(168 168 168)',
      textAlign: 'center',
    },  
})

export default Styles;