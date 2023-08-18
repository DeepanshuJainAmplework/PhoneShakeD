import React, {useState} from 'react';
import {Text, Pressable} from 'react-native';
import {Btn} from '../../../components/Pressable';
import Styles from './Style';
import {
  ParentView,
  HeaderView,
  HeadingView,
  InputView,
  ButtonView,
} from '../../../containers/FolderContainers';
import {MobileInputText} from '../../../components/Textinput';
import {SubText, Heading} from '../../../components/Text';

const MobileLogin = ({navigation}) => {
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

      <HeaderView />

      <HeadingView>
        <Text style={Styles.head}>What's your{'\n'}mobile number?</Text>
        <Pressable
          style={Styles.emailPressable}
          onPress={() => navigation.replace('EmailLogin')}>
          <Text style={Styles.emailText}>Use email instead</Text>
        </Pressable>
      </HeadingView>

      <InputView>
        <MobileInputText
          placeholderMobile={'Mobile Number'}
          onChangeTextMobile={fname => setfname(fname)}
        />

        <SubText text="We'll send you an SMS verification code" />
      </InputView>

      <ButtonView>
        <Btn
          disabled={!validate()}
          title="Continue"
          onPress={() => navigation.navigate('Confirmation')}
          bgcolor={validate() == true ? Styles.activeBtn : Styles.inActiveBtn}
        />
      </ButtonView>
      
    </ParentView>
  );
};

export default MobileLogin;
