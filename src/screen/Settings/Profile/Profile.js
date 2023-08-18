import React from 'react';
import {View, Text, Image, Pressable, Alert} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Styles from './Styles';
import {s, ms} from 'react-native-size-matters';
import {UserInfoIcon} from '../../../containers/UserInfoIcons';

const Profile = ({navigation}) => {
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

      <View
        style={Styles.utilities}>
        <UserInfoIcon
          source={require('../../../assets/Location.png')}
          text="Location"
          onPress={()=>navigation.navigate('LinkedAccounts')}
        />
        <UserInfoIcon
          source={require('../../../assets/website.png')}
          text="Website"
          onPress={()=>navigation.navigate('LinkedAccounts')}
        />
        <UserInfoIcon
          source={require('../../../assets/Fax.png')}
          text="Fax"
          onPress={()=>navigation.navigate('LinkedAccounts')}
        />
        <UserInfoIcon
          source={require('../../../assets/Facebook.png')}
          text="Facebook"
          onPress={()=>navigation.navigate('LinkedAccounts')}
        />
        <UserInfoIcon
          source={require('../../../assets/Linkedin.png')}
          text="Linkedin"
          onPress={()=>navigation.navigate('LinkedAccounts')}
        />
        <UserInfoIcon
          source={require('../../../assets/Twitter.png')}
          text="Twitter"
          onPress={()=>navigation.navigate('LinkedAccounts')}
        />
        <UserInfoIcon
          source={require('../../../assets/Tumblr.png')}
          text="Tumblr"
          onPress={()=>navigation.navigate('LinkedAccounts')}
        />
        <UserInfoIcon
          source={require('../../../assets/Whatsapp.png')}
          text="Whatsapp"
          onPress={()=>navigation.navigate('LinkedAccounts')}
        />
        <UserInfoIcon
          source={require('../../../assets/Add.png')}
          text="Add"
          onPress={()=>navigation.navigate('LinkedAccounts')}
        />
      </View>
    </>
  );
};

export default Profile;
