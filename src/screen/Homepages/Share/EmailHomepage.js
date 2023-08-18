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
import Styles from './Styles';

const EmailHomepage = ({navigation}) => {
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={Styles.ParentViewiew}>
        

        <View
          style={{flex: 0.36, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={Styles.head}>Share my PhoneShake Contact</Text>
          <Pressable
            style={Styles.emailPressable}
            onPress={() => navigation.replace('Phone')}>
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

        <View style={{flex: 0.24, justifyContent: 'center'}}>
          <TextInput
            placeholder="Email Address"
            inputMode="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={fname => setfname(fname)}
            style={Styles.inputTextEmail}
            autoCapitalize='none'
          />
          <Text style={Styles.subText}>
          We'll send an email invite with your contact
          </Text>
        </View>

        <View
          style={{flex: 0.36, alignItems: 'center', }}>
          <Btn
            disabled={!validate()}
            title="Share my contact "
            onPress={() => Alert.alert('Contact Shared')}
            bgcolor={validate() == true ? Styles.activeBtn : Styles.inActiveBtn}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default EmailHomepage;
