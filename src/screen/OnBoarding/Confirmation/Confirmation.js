import React, {useState} from 'react';
import {Text, Pressable, TextInput} from 'react-native';
import Styles from './Styles';
import {Btn} from '../../../components/Pressable';
import {
  ParentView,
  HeaderView,
  HeadingView,
  InputView,
  ButtonView,
} from '../../../containers/FolderContainers';
import { Storage } from '../../../navigation/StackNavigation';


const Confirmation = ({navigation,route}) => {
  
  const [fname, setfname] = useState(0);
  const [text, setText] = useState('Enter the confirmation code sent to you');
  const [col, setCol] = useState('rgb(168 168 168)');
  const Token=route.params.Token=='HomeScreenBottomTab'?'HomeScreenBottomTab':'Name';

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

  

  return (
    <ParentView>
      <HeaderView />

      <HeadingView>
        <Text style={Styles.head}>Please enter{'\n'} the confirmation code</Text>
        <Pressable
          style={Styles.emailPressable}
          onPress={() => navigation.goBack()}>
          <Text style={Styles.emailText}>Did not recieve the code</Text>
        </Pressable>
      </HeadingView>

      <InputView>
        <TextInput
          placeholder="Enter Code"
          inputMode="numeric"
          keyboardType="numeric"
          maxLength={6}
          onChangeText={fname => setfname(fname)}
          style={Styles.inputText}
        />
        <Text
          style={text == 'Enter the confirmation code sent to you' ? Styles.subTextTrue : Styles.subTextFalse}>
          {text}
        </Text>
      </InputView>

      <ButtonView>
        <Btn
          disabled={!validate()}
          bgcolor={validate() == true ? Styles.activeBtn : Styles.inActiveBtn}
          onPress={() =>
            Correctness() == true
              ?( 
                Token=='HomeScreenBottomTab'?Storage.set('token',true):navigation.navigate('Name')
              )
              : (setText('The code entered is incorrect'),
                setCol('red'))
          }
          title="Continue"
        />
      </ButtonView>
    </ParentView>
  );
};

export default Confirmation;
