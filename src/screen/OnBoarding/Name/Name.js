import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import {Heading} from '../../../components/Text';
import {Btn} from '../../../components/Pressable';
import Styles from './Styles';

const Name = ({navigation}) => {
  const [fname, setfname] = useState('');

  const validate = () => {
    if (fname.length > 0) {
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
      <View style={Styles.BaseView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{flex: 0.1, width: '100%', }}></View>

          <View style={{flex:0.33, alignItems:'center'}}>

          <Heading Htext={" What's your Name?"} />
          </View>

          <View style={{flex: 0.34, width: 290}}>
            <View style={Styles.Input}>
              <TextInput
                placeholder="Full Name"
                autoCapitalize="words"
                inputMode="text"
                keyboardType="default"
                onChangeText={fname => setfname(fname)}
                style={{fontSize: 18}}
              />
            </View>
            <Text
              style={Styles.subText}>
              Add your first and last name
            </Text>
          </View>

          <View style={{flex: 0.26, justifyContent: 'center', alignItems: 'center',}}>
            <Btn
              disabled={!validate()}
              onPress={() => navigation.navigate('Organization')}
              title="Continue"
              bgcolor={
                validate() == true ? Styles.activeBtn : Styles.inactiveBtn
              }
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Name;
