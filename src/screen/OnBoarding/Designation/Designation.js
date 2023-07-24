import React, {useState} from "react";
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";

import HeaderP from '../../../containers/header';
import {Heading} from '../../../components/Text';
import {Btn} from '../../../components/Pressable';
import Styles from './Styles';

const Designation = ({navigation}) => {

    const[fname,setfname]=useState("");

    const validate=()=>{
        if(fname.length>0){
            return true;
        }
        else{
            return false;
        }
    }

    return (
        <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={Styles.BaseView}>
        <View style={{flex: 0.1, width: '100%'}}>
          <HeaderP
            back="<"
            onPressBack={() => navigation.goBack()}
            backDisable={false}
            title=" "
            onpressSkip={()=>navigation.navigate('UserName')}
            SkipDisable={false}
            SkipText="Skip"
          />
        </View>

        <Heading
          Htext={
            " What's your position/designation ?"
          }
        />

        <View style={{flex: 0.5, justifyContent: 'center', width: 290}}>
          <View style={Styles.Input}>
            

            <TextInput
              placeholder="Position"
              autoCapitalize='words'
              inputMode="text"
              keyboardType="default"
              value={fname}
              onChangeText={value=> setfname(value)}
              style={{fontSize: 18}}
            />
          </View>
          <Text
            style={{marginTop: 7,
                fontSize: 12,
                color: 'rgb(168 168 168)',
                textAlign: 'center',}}>
            Add your occupation title
          </Text>
        </View>

        <View style={{flex: 0.3, justifyContent: 'center', width: '85%'}}>
          <Btn
            disabled={!validate()}
            onPress={()=>(validate()==true?
             navigation.navigate('UserName'):null)
            }
            title="Continue"
            bgcolor={validate() == true ? Styles.activeBtn : Styles.inactiveBtn}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
        

    );
};

export default Designation;