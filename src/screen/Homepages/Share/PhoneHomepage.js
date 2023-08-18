import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { ParentView } from '../../../containers/FolderContainers';
import {Btn} from '../../../components/Pressable';
import Styles from './Styles';
import { MobileInputText } from '../../../components/Textinput';

const PhoneHomepage = ({navigation}) => {
  const [fname, setfname] = useState(0);

  const validate = () => {
    if (fname < 10000000000 && fname > 999999999) {
      return true;
    } else {
      return false;
    }
  };


  return (
    <ParentView>

        <View
          style={{
            flex: 0.36,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={Styles.head}>Share my{'\n'}PhoneShake Contact</Text>
          <Pressable
            style={Styles.emailPressable}
            onPress={() => navigation.replace('Email')}>
            <Text style={Styles.emailText}>Use email instead</Text>
          </Pressable>
        </View>

        <View
          style={{
            flex: 0.24,
            justifyContent: 'center',
            width: 290,
            alignItems: 'center',
          }}>
          <View style={Styles.Input}>
            
            <MobileInputText
              placeholderMobile="Mobile Number"
              onChangeTextMobile={fname => setfname(fname)}              
            />
          </View>
          <Text style={Styles.subText}>
            We'll send a SMS invite with your contact
          </Text>
        </View>

        <View
          style={{
            flex: 0.36,
            alignItems: 'center',
            
          }}>
          <Btn
            disabled={!validate()}
            title="Share my contact"
            onPress={() => Alert.alert('Contact Shared')}
            bgcolor={validate() == true ? Styles.activeBtn : Styles.inActiveBtn}
          />
        </View>
  </ParentView>
  );
};

export default PhoneHomepage;
