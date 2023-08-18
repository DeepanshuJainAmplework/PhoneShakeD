import React, {useState} from 'react';
import {View, Text, SectionList, TouchableOpacity} from 'react-native';
import {DATA} from './OptionsData';
import style from './Styles';
import {OptionSectionfooter} from './SectionFooter';
import {ModalComponent} from '../../../components/Modal';
import {ForwardIcon} from '../../../components/Image';
import {HeaderView} from '../../../containers/FolderContainers';
import HeaderContainer from '../../../containers/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackActions} from '@react-navigation/native';
const SettingList = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openmodal = () => {
    setModalVisible(true);
  };
  const closemodal = () => {
    setModalVisible(false);
  };

  const handleItems = item => {
    if (item.screen == 'LogOut') {
      openmodal();
    } else if (item.label != 'Handle') {
      navigation.navigate(item.screen, {name: item.label});
    }
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <HeaderView>
        <HeaderContainer
          borderbottomwidth={1}
          onPressBack={() => navigation.goBack()}
          back={<Ionicons name="chevron-back-sharp" size={24} />}
          title="   Options"
        />
      </HeaderView>
      <View style={{flex: 0.95}}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({section: {title}}) => (
            <Text style={style.TitleText}>{title}</Text>
          )}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleItems(item)}>
              <View style={style.itemView}>
                <Text style={style.ItemText}>{item.label}</Text>
                <Text style={style.Itemid}>{item.id}</Text>
                <ForwardIcon />
              </View>
            </TouchableOpacity>
          )}
          stickySectionHeadersEnabled={false}
          ListFooterComponent={<OptionSectionfooter />}
        />

        <ModalComponent
          visible={modalVisible}
          onClose={closemodal}
          logoutpress={() => {
            navigation.dispatch(StackActions.popToTop);
          }}
        />
      </View>
    </View>
  );
};

export default SettingList;
