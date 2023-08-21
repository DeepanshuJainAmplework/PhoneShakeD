import React from "react";
import { StyleSheet } from "react-native";
import { s,ms,mvs } from "react-native-size-matters";
import { themedefault } from "../../../Theme";

const Styles=StyleSheet.create({
    activeBtn:{
        backgroundColor:themedefault.colors.dogerblue
    },
    inActiveBtn:{
        backgroundColor:themedefault.colors.lightdodgerblue
    },
    ParentViewiew:{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    head:{
        fontSize: s(20),
        color: themedefault.colors.black,
        textAlign: 'center',
        width: s(154),
        fontWeight: '600',
        
    },
    emailPressable:
        {width: 285, height: 36, marginTop: 8
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
    inputText:{
        fontSize: 18,
        
        textAlign: 'center',
        flex: 0.8,
    },
    subText:{
      marginTop: 7,
      fontSize: s(10),
      color: 'rgb(168 168 168)',
      textAlign: 'center',
    },
    
    

})

export default Styles;