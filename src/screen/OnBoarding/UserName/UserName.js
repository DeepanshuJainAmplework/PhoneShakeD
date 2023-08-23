import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import HeaderContainer from '../../../containers/header';
import {Heading} from '../../../components/Text';
import {Btn} from '../../../components/Pressable';
import Styles from './Styles';
import {
  ParentView,
  HeaderView,
  HeadingView,
  ButtonView,
} from '../../../containers/FolderContainers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Storage } from '../../../navigation/StackNavigation';

const UserName = ({navigation}) => {
  const [fname, setfname] = useState('');

  const [textone, setTextone] = useState('phoneshake.me/');

  const [texttwo, setTexttwo] = useState('');

  const validate = () => {
    if (fname.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const Confirmation = () => {
    if (fname == 'snash') {
      return false;
    } else {
      return true;
    }
  };

  return (
    <ParentView>
      <HeaderView>
        <HeaderContainer
          back={<Ionicons name="chevron-back-sharp" size={24} />}
          onPressBack={() => navigation.goBack()}
        />
      </HeaderView>
      <HeadingView>
        <Heading
          HeadingText={
            'Choose a @Handle,\nyour unique name for sharing your contact with anyone'
          }
        />
      </HeadingView>
      <View style={{flex: 0.34, justifyContent: 'center', width: 280}}>
        <View style={Styles.Input}>
          <Text style={{fontSize: 18}}>@</Text>
          <TextInput
            placeholder="Handle"
            autoCapitalize="none"
            inputMode="text"
            keyboardType="default"
            value={fname}
            onChange={() => {
              setTextone('phoneshake.me/');
              setTexttwo('');
            }}
            onChangeText={value => setfname(value)}
            style={{fontSize: 18, paddingBottom: 5}}
          />
        </View>
        <Text
          style={
            textone === 'phoneshake.me/' ? Styles.IdMatch : Styles.NotIdMatch
          }>
          {textone}@{fname} {texttwo}
        </Text>
      </View>

      <ButtonView>
        <Btn
          disabled={!validate()}
          onPress={() =>
            Confirmation() == true
              ? (navigation.navigate('Terms'), Storage.set('UserName','@'+fname))
              : (setTextone(''), setTexttwo('is unavailable'))
          }
          title="Continue"
          bgcolor={validate() == true ? Styles.activeBtn : Styles.inactiveBtn}
        />
      </ButtonView>
    </ParentView>
  );
};

export default UserName;
