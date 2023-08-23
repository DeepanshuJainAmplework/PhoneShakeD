import React, {useState} from 'react';
import {Text, Pressable} from 'react-native';
import {Btn} from '../../../components/Pressable';
import {
  ParentView,
  HeaderView,
  HeadingView,
  InputView,
  ButtonView,
} from '../../../containers/FolderContainers';
import Styles from './Style';
import {EmailInputText} from '../../../components/Textinput';
import {SubText} from '../../../components/Text';
import { Storage } from '../../../navigation/StackNavigation';

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
    <ParentView>
      <HeaderView />

      <HeadingView>
        <Text style={Styles.head}>What's your email?</Text>
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
      </HeadingView>

      <InputView>
        <EmailInputText onChangetextemail={fname => setfname(fname)} />
        <SubText text="We'll send you an EMAIL verification code" />
      </InputView>

      <ButtonView>
        <Btn
          disabled={!validate()}
          title="Continue"
          onPress={() => {
            Storage.contains('Email')==true?(navigation.navigate('Confirmation', {Token:'HomescreenBottomTab'})):
            (Storage.clearAll(), Storage.set('Email',fname), Storage.set('SignUpInfo',fname), navigation.navigate('Confirmation',{Token:'Name'}))
          }}
          bgcolor={validate() == true ? Styles.activeBtn : Styles.inActiveBtn}
        />
      </ButtonView>
    </ParentView>
  );
};

export default EmailLogin;
