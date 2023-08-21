import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Styles from './Styles';
import {s, ms} from 'react-native-size-matters';
import {UserInfoIcon} from '../../../containers/UserInfoIcons';
import {ModalUtil} from '../../../components/Modal';
import {} from 'react-native-gesture-handler';
import {DATA} from './UtilitiesList';
import {themedefault} from '../../../Theme';

const Profile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [addUtils, setAddUtils] = useState([]);
  const modalOpen = () => {
    setModalVisible(true);
  };
  const modalClose = () => {
    setModalVisible(false);
  };

  const AddUtil = item => {
    const newUtil = (
      <UserInfoIcon
        onPress={() => navigation.navigate('Options')}
        text={item.name}
        sourceimg={item.source}
        length={addUtils.length + 1}
      />
    );

    setAddUtils([...addUtils, newUtil]);
  };
  return (
    <>
      <View style={Styles.UserProfile}>
        <View style={Styles.SettingIcon}>
          <Pressable onPress={() => navigation.navigate('Options')}>
            <AntDesign name="setting" size={s(14)} />
          </Pressable>
        </View>

        <View style={{flexDirection: 'column-reverse'}}>
          <Image
            style={Styles.UserImage}
            resizeMode="contain"
            source={require('../../../assets/Homepage.png')}
          />
          <Image
            style={Styles.UserBadgeIcon}
            resizeMode="contain"
            source={require('../../../assets/google-icon.png')}
          />
        </View>

        <Text style={Styles.UserName}>Michael Cole</Text>
        <Text style={Styles.UserDesignation}>
          CO-FOUNDER AT PHONESHAKE INC.
        </Text>
        <Text style={Styles.UserBio}>
          I'm a happy person that loves cats and climbing on mountains.
        </Text>
      </View>

      <View style={Styles.utilities}>
        {addUtils}

        <UserInfoIcon
          sourceimg={require('../../../assets/Add.png')}
          text="Add"
          onPress={modalOpen}
        />

        <ModalUtil visible={modalVisible} onClose={modalClose}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              backgroundColor: themedefault.colors.lightdodgerblue,
            }}>
            <FlatList
              keyExtractor={(item, index) => index?.toString()}
              showsVerticalScrollIndicator={false}
              data={DATA}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    modalClose();
                    AddUtil(item);
                  }}>
                  <Text
                    style={{
                      fontWeight: '500',
                      textAlign: 'center',
                      fontSize: 20,
                      backgroundColor: themedefault.colors.dogerblue,
                      color: themedefault.colors.white,
                      marginVertical: ms(10),
                      paddingVertical: 20,
                      paddingHorizontal: 100,
                      borderRadius: 30,
                      overflow: 'hidden',
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </ModalUtil>
      </View>
    </>
  );
};

export default Profile;
