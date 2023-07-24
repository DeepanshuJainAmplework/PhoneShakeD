import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import HeaderP from '../../../containers/header';
import { Heading } from '../../../components/Text';
import { Btn } from '../../../components/Pressable';
import Styles from './Styles';


const UserName = ({navigation}) => {
  const [fname, setfname] = useState('');

  const [textone, setTextone] = useState('phoneshake.me/');

  const [texttwo, setTexttwo] = useState('');

  const[txt,setTxt]=useState(fname);

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
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View
        style={Styles.BaseView}>
        
        <View style={{flex:0.1, width:'100%'}}>
          <HeaderP back='<' onPressBack={()=>(navigation.goBack())} backDisable={false} title=' ' onpressSkip={null} SkipDisable={true} SkipText=' ' />

        </View>

        <Heading Htext={'Choose a @Handle, your unique name for sharing your contact with anyone'} />
       
        <View style={{flex: 0.5, justifyContent: 'center', width: 290, }}>
          <View
            style={Styles.Input}>
            <Text style={{fontSize: 18}}>@</Text>

            <TextInput
              placeholder="Handle"
              autoCapitalize="none"
              inputMode="text"
              keyboardType="default"
              value={fname}
              onChangeText={value => setfname(value)}
              
              style={{fontSize: 18}}
              
            />
          </View>
          <Text
            style={Confirmation()==true?
              Styles.IdMatch:
            Styles.NotIdMatch}>
            {textone}@{fname} {texttwo}
          </Text>
        </View>

        <View style={{flex: 0.3, justifyContent:'center' , width:'85%'}}>
          <Btn
            disabled={!validate()}            
            onPress={() =>
              Confirmation() == true
                ? navigation.navigate('Terms')
                : (setTextone(''), setTexttwo('is unavailable'))
            }
            title='continue'
            bgcolor={validate() == true ? Styles.activeBtn : Styles.inactiveBtn}
            />
            
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default UserName;
