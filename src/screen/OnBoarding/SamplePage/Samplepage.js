import React from 'react';
import {View, Text, TouchableWithoutFeedback, Alert, Image} from 'react-native';
import Styles from './Styles';
import HeaderContainer from '../../../containers/header';
import {Btn} from '../../../components/Pressable';
import {ParentView, HeaderView} from '../../../containers/FolderContainers';
import { Storage } from '../../../navigation/StackNavigation';

const SamplePage = ({navigation}) => {
  return (
    <ParentView>
      <HeaderView>
        <HeaderContainer SkipText="Skip" onpressSkip={() => { Storage.set('token',true)}} />
      </HeaderView>

      <View style={Styles.SampleView}>
        <Text style={Styles.heading}>Build your Contact Profile</Text>
        <Image
          source={require('/Users/deepak/Desktop/ReactProject/PhoneShakeD/src/assets/Samplepage.png')}
          style={Styles.SampleImage}
        />
      </View>
      <View style={{flex: 0.11, marginTop: 10}}>
        <Btn
          title="Continue"
          disabled={false}
          onPress={() =>{ Storage.set('token', true);}}
          
        />
      </View>
    </ParentView>
  );
};

export default SamplePage;
