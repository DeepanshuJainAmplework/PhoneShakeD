import React, {useState} from 'react';
import {Heading} from '../../../components/Text';
import {Btn} from '../../../components/Pressable';
import Styles from './Styles';
import {ParentView,HeaderView,HeadingView,InputView,ButtonView,} from '../../../containers/FolderContainers';
import {SubText} from '../../../components/Text';
import {InputText} from '../../../components/Textinput';
import { Storage } from '../../../navigation/StackNavigation';

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
    <ParentView>
      <HeaderView />

      <HeadingView>
        <Heading HeadingText={"What's your Name?"} />
      </HeadingView>

      <InputView>
        <InputText
          placeholder="Full Name"
          onChangeText={fname => setfname(fname)}
        />
        <SubText text="Add your first and last name" />
      </InputView>

      <ButtonView>
        <Btn
          disabled={!validate()}
          onPress={() =>{ navigation.navigate('Organization'); Storage.set('Name',fname);}}
          title="Continue"
          bgcolor={validate() == true ? Styles.activeBtn : Styles.inactiveBtn}
        />
      </ButtonView>

    </ParentView>
  );
};

export default Name;
