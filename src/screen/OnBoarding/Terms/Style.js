import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { s } from "react-native-size-matters";

const Styles=StyleSheet.create(
    {
        Clause:{
            paddingVertical: 10,
            fontSize: s(13),
            color: 'rgb(127 127 127)',
            letterSpacing: 0.04,
        },
        Rule:{
            color: 'black', fontSize: s(14)
        },
        textActiveBlack:{
            fontSize: s(12), marginLeft: 10,
            color:'rgb(0 0 0)'
        },
        textInactiveBlack:{
            fontSize: s(12), marginLeft: 10,
            color:'rgba(0 0 0/0.5)'
        },
        textActiveBlue:{
            color:'rgb(32 142 251)'
        },
        textInactiveBlue:{
            color:'rgba(32 142 251/0.5)'

        },
        activeBtn:{
            backgroundColor:'rgb(32 142 251)'
        },
        inactiveBtn:{
            backgroundColor:'rgba(32 142 251/0.5)'
        }

    }
)

export  default Styles;