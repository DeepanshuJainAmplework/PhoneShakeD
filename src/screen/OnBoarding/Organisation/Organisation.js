import React, {useState} from 'react';
import HeaderContainer from '../../../containers/header';
import {Heading,SubText} from '../../../components/Text';
import {Btn} from '../../../components/Pressable';
import Styles from './Styles';
import {ParentView, HeaderView, HeadingView, InputView, ButtonView} from '../../../containers/FolderContainers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {InputText} from '../../../components/Textinput';

const Org = ({navigation}) => {
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
      <HeaderView>
        <HeaderContainer
          back={<Ionicons name="chevron-back-sharp" size={24} />}
          onPressBack={() => navigation.goBack()}
          onpressSkip={() => navigation.navigate('Designation')}
          SkipText="Skip"
        />
      </HeaderView>

      <HeadingView>
        <Heading HeadingText={" What's your\ncurrent Organization ?"} />
      </HeadingView>
      <InputView>
        <InputText
          placeholder="Organization name"
          onChangeText={value => setfname(value)}
        />

        <SubText text="Add your company/organization name" />
      </InputView>

      <ButtonView>
        <Btn
          disabled={!validate()}
          onPress={() =>
            validate() == true ? navigation.navigate('Designation') : null
          }
          title="Continue"
          bgcolor={validate() == true ? Styles.activeBtn : Styles.inactiveBtn}
        />
      </ButtonView>
    </ParentView>
  );
};

export default Org;
