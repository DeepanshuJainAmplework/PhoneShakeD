import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import {Btn} from '../../../components/Pressable';

import Styles from './Style';

import {SelectList} from 'react-native-dropdown-select-list';

const MobileLogin = ({navigation}) => {
  const [fname, setfname] = useState(0);

  const [selected, setSelected] = useState('');

  const validate = () => {
    if (fname < 10000000000 && fname > 999999999) {
      return true;
    } else {
      return false;
    }
  };

  const data = [
    {
      key: '1',
      value: 'US +1',
    },
    {
      key: '2',
      value: 'IND +91',
    },
    {
      key: '3',
      value: 'AFG +93',
    },
    {
      key: '4',
      value: 'AUS +61',
    },
  ];

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={Styles.baseView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{flex: 0.1}}>
          </View>

          <View
            style={{
              flex: 0.3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={Styles.head}>What's your mobile number?</Text>
            <Pressable
              style={Styles.emailPressable}
              onPress={() => navigation.replace('EmailLogin')}>
              <Text style={Styles.emailText}>Use email instead</Text>
            </Pressable>
          </View>

          <View style={{flex: 0.34, justifyContent: 'center', width: 290, alignItems:'center', }}>
            <View style={Styles.Input}>
              <SelectList
                setSelected={val => setSelected(val)}
                data={data}
                save="value"
                placeholder="US +1"
                maxHeight={80}
                boxStyles={{ borderWidth:0}}
                dropdownStyles={{borderColor: 'white'}}
                inputStyles={{color: 'rgb(32 142 251)'}}
                
                overflow="hidden"
              />

              <TextInput
                placeholder="Mobile Number"
                inputMode="numeric"
                keyboardType="numeric"
                maxLength={10}
                onChangeText={fname => setfname(fname)}
                style={Styles.inputText}
              />
            </View>
            <Text style={Styles.subText}>
              We'll send you an SMS verification code
            </Text>
          </View>

          <View
            style={{
              flex: 0.26,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Btn
              disabled={!validate()}
              title="Continue"
              onPress={() => navigation.navigate('Confirmation')}
              bgcolor={
                validate() == true ? Styles.activeBtn : Styles.inActiveBtn
              }
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MobileLogin;
