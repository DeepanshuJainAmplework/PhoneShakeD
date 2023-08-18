import React, {useState} from 'react';
import {
  ParentView,
  HeaderView,
  HeadingView,
  InputView,
  ButtonView,
} from '../../../containers/FolderContainers';
import HeaderContainer from '../../../containers/header';
import {Heading, SubText} from '../../../components/Text';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {InputText, MobileInputText, EmailInputText, BioText} from '../../../components/Textinput';
import { Btn } from '../../../components/Pressable';
import { Alert } from 'react-native';
const UpdateScreen = ({route, navigation}) => {
  const Item = route.params.name;

  const [fname, setfname] = useState('');

  const[fnum, setfnum]=useState(0);

  const[femail,setfEmail]=useState('');

  const validate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (fname.length > 0 || (fnum < 10000000000 && fnum > 999999999) || reg.test(femail)==true) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ParentView>
      <HeaderView>
        <HeaderContainer
          back={<Ionicons name="chevron-back-sharp" size={25} />}
          backDisable={false}
          onPressBack={() => navigation.goBack()}
        />
      </HeaderView>

      <HeadingView>
        <Heading
          Htext={
            Item == 'Name'
              ? "What's your name?"
              : Item == 'Organisation'
              ? "What's your\ncurrent organisation?"
              : Item == 'Position'
              ? "What's your\nposition/designation?"
              : Item == 'Bio'
              ? 'Your bio'
              : Item == 'Mobile Number'
              ? "What's your\nmobile number?"
              : Item == 'Email'
              ? "What's your email?"
              : Item == 'Landline/Desk'
              ? "What's your\nLandline/Desk number?"
              : Item == 'Fax'
              ? "What's your\nFax number?"
              : null
          }
        />
      </HeadingView>
      

      <InputView>
        {(Item == 'Name' || Item =='Organisation' ||Item == 'Position' ) ? (
          <InputText
            placeholder={
              Item == 'Name'
                ? 'Full name'
                : Item == 'Organisation'
                ? 'Organisation name'
                : Item == 'Position'
                ? 'Position'
                
                : null
            }
            onChangeText={fname => setfname(fname)}
          />
        ) 
        :Item=='Email'?<EmailInputText onChangetextemail={femail=>setfEmail(femail)} />
        :Item=='Bio'?<BioText />:
        (
        <MobileInputText 
        onChangeTextMobile={fnum => setfnum(fnum)}
        placeholderMobile={
          Item == 'Mobile Number'
        ? "Mobile number"
        : Item == 'Landline/Desk'
        ? "Landline number"
        : Item == 'Fax'
        ? "Fax number"
        : null}
        />)
        }

        <SubText
          text={
            Item == 'Name'
              ? 'Add your first and last name'
              : Item == 'Organisation'
              ? 'Add your company/organisation name'
              : Item == 'Position'
              ? 'Add your occupation title'
              : Item == 'Mobile Number'
              ? "Number you would like to be contacted at"
              : Item == 'Email'
              ? "Email you would like to be contacted at"
              : Item == 'Landline/Desk'
              ? "Number you would like to be contacted at"
              : Item == 'Fax'
              ? "Fax Number you would like to use"
              : null
          }
        />
      </InputView>

      <ButtonView>
      <Btn
            disabled={!validate()}
            onPress={() => {navigation.goBack(); Alert.alert('Done')}}
            title="Continue"
          bgcolor={validate() == true ? {backgroundColor: 'rgb(32 142 251)'} :{backgroundColor: 'rgba(32 142 251/0.5)'}}
          />

      </ButtonView>
    </ParentView>
  );
};

export default UpdateScreen;
