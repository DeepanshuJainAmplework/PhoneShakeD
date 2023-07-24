import React, {useState} from 'react';
import {s, ms} from 'react-native-size-matters';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  SectionList,
  ScrollView,
  SafeAreaView,
  Pressable,
  Alert,
} from 'react-native';
import Styles from './Style';
import CheckBox from '@react-native-community/checkbox';
import HeaderP from '../../../containers/header';
import {Btn} from '../../../components/Pressable';

const TermsData = ({navigation}) => {
  const [check, setCheck] = useState(false);

  const validate = () => {
    if (check == true) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
      <View style={{flex: 0.1, width: '100%'}}>
        <HeaderP
          back="<"
          onPressBack={() => {
            navigation.goBack();
          }}
          backDisable={false}
          title="Privacy Policy"
          onpressSkip={null}
          SkipDisable={true}
          SkipText=" "
        />
      </View>

      <ScrollView style={{marginHorizontal: 16, flex: 0.6}}>
        <Text style={Styles.Clause}>1. First Clause</Text>
        <Text style={Styles.Rule}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in
          section 1.10.32.
        </Text>
        <Text style={Styles.Clause}>2. Second Clause</Text>
        <Text style={Styles.Rule}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in
          section 1.10.32.
        </Text>
        <Text style={Styles.Clause}>3. Third Clause</Text>
        <Text style={Styles.Rule}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in
          section 1.10.32.
        </Text>
      </ScrollView>

      <View style={{flex: 0.3, alignItems: 'center'}}>
        <View style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            disabled={false}
            value={check}
            boxType="square"
            onCheckColor="white"
            onFillColor="dodgerblue"
            style={{height: ms(24), width: s(24)}}
            onValueChange={newValue => setCheck(newValue)}
            animationDuration={0.2}
          />
          <Text
            style={
              validate() === true
                ? Styles.textActiveBlack
                : Styles.textInactiveBlack
            }>
            Accept
            <Text
              style={
                validate() === true
                  ? Styles.textActiveBlue
                  : Styles.textInactiveBlue
              }>
              {' '}
              Privacy Policy{' '}
            </Text>
            and{' '}
            <Text
              style={
                validate() === true
                  ? Styles.textActiveBlue
                  : Styles.textInactiveBlue
              }>
              Terms of Services
            </Text>
          </Text>
        </View>
        <View style={{flex: 0.5}}>
          <Btn
            onPress={() => (
              validate() == true ? navigation.navigate('Completion') : null)}
            title="Complete"
            bgcolor={validate() == true ? Styles.activeBtn : Styles.inactiveBtn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default TermsData;
