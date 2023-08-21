import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {ParentView} from '../../containers/FolderContainers';
import {AlphabetList} from 'react-native-section-alphabet-list';
import {themedefault} from '../../Theme';
import {DATA} from './Contactlist';
import {ContactlistImage} from '../../components/Image';
import {SubText} from '../../components/Text';
const Contacts = () => {
  const [modalstate, setmodalstate] = useState(false);
  return (
    <ParentView>
      <AlphabetList
      
        
        stickyHeaderHiddenOnScroll={true}
        data={DATA}
        indexLetterStyle={{
          color: themedefault.colors.dogerblue,
          fontSize: 12,
        }}
        renderCustomSectionHeader={section => (
          <View style={{backgroundColor: themedefault.colors.lightestgray}}>
            <Text
              style={{
                color: themedefault.colors.gray,
                fontSize: 12,
                paddingLeft: 10,
              }}>
              {section.title}
            </Text>
          </View>
        )}
        renderCustomItem={item => (
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: themedefault.colors.lightgray,
                paddingVertical: 10,
                marginRight: 10,
              }}>
              <ContactlistImage source={item.imgsrc} />
              <View style={{marginRight: 10, width: '80%'}}>
                <SubText
                  subtextstyle={{
                    textAlign: 'left',
                    fontSize: 16,
                    color: themedefault.colors.black,
                    fontWeight: '700',
                  }}
                  text={item.value}
                />
                <SubText
                  subtextstyle={{
                    textAlign: 'left',
                    fontSize: 12,
                    color: themedefault.colors.gray,
                  }}
                  text={item.designation}
                />
                <SubText
                  subtextstyle={{
                    textAlign: 'left',
                    fontSize: 14,
                    color: themedefault.colors.black,
                    width: '100%',
                  }}
                  text={item.bio}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </ParentView>
  );
};
export default Contacts;
