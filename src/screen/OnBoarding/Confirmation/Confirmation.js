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
import Styles from './Styles';
import {Btn} from '../../../components/Pressable';

const Confirmation = ({navigation}) => {

  
  
  const [fname, setfname] = useState(0);

  const [text, setText] = useState('Enter the confirmation code sent to you');

  const [col, setCol] = useState('rgb(168 168 168)');

  const [a, b] = useState(false);

  const validate = () => {
    if (fname < 1000000 && fname > 99999) {
      return true;
    } else {
      return false;
    }
  };

  const Correctness = () => {
    if (fname == 999999) {
      return true;
    } else {
      return false;
    }
  };

  const Warning = () => {
    if (a == true) {
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
          <View style={{flex: 0.1}}></View>

          <View
            style={{
              flex: 0.33,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={Styles.head}>Please enter the confirmation code</Text>
            <Pressable
              style={Styles.emailPressable}
              onPress={() => navigation.goBack()}>
              <Text style={Styles.emailText}>Did not recieve the code</Text>
            </Pressable>
          </View>

          <View style={{flex: 0.34, justifyContent: 'center', alignItems:'center'}}>
            <TextInput
              placeholder="Enter Code"
              inputMode="numeric"
              keyboardType="numeric"
              maxLength={6}
              onChangeText={fname => setfname(fname)}
              style={Styles.inputText}
            />
            <Text
              style={
                Warning() == false ? Styles.subTextTrue : Styles.subTextFalse
              }>
              {text}
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
              bgcolor={
                validate() == true ? Styles.activeBtn : Styles.inActiveBtn
              }
              onPress={() =>
                Correctness() == true
                  ? navigation.replace('Name')
                  : (setText('The code entered is incorrect'),
                    setCol('red'),
                    b(true))
              }
              title="Continue"
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Confirmation;
