import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import { Btn } from '../../../components/Pressable';
import Styles from './Style';

const EmailLogin = ({navigation}) => {
  const [fname, setfname] = useState('');

  const validate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(fname) == true) {
      return true;
    } else {
      return false;
    }
  };

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
          style={{flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={Styles.head}>
            What's your email?
          </Text>
          <Pressable
            style={Styles.emailPressable}
            onPress={() => navigation.replace('MobileLogin')}>
            <Text
              style={{
                textAlign: 'center',
                padding: 8,
                color: 'rgb(32 142 251)',
              }}>
              Use Phone instead
            </Text>
          </Pressable>
        </View>

        <View style={{flex: 0.34, justifyContent: 'center'}}>
          <TextInput
            placeholder="Email Address"
            inputMode="email"
            keyboardType="email-address"
            textContentType='emailAddress'
            onChangeText={fname => setfname(fname)}
            style={Styles.inputText}
          />
          <Text
            style={Styles.subText}>
            We'll send you an EMAIL verification code
          </Text>
        </View>

        <View
          style={{flex: 0.26,
            alignItems: 'center',
            justifyContent: 'center', }}>
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

export default EmailLogin;
