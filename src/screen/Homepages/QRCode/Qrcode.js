import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {s, ms} from 'react-native-size-matters';

const Qrcode = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{flex: 0.52, flexDirection: 'column-reverse'}}>
        <View
          style={{
            backgroundColor: 'rgb(32 142 251)',
            alignSelf: 'center',
            shadowColor: 'red',
            height: 200,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.4,
            shadowRadius: 5,
            // For Android shadow properties (elevation)
            elevation: 4,
            borderRadius:4
          }}>
          <QRCode color="rgb(32 142 251)" backgroundColor="white" size={170} logo={require('/Users/deepak/Desktop/ReactProject/PhoneShakeD/src/assets/Homepage.png')} logoSize={40} logoBorderRadius={20} logoBackgroundColor='white' logoMargin={1}/>
        </View>
      </View>
      <View style={{flex: 0.5, alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 20,
            marginTop: ms(20),
            fontWeight: '500',
            color: 'black',
          }}>
          Steve Nash
        </Text>
        <Text
          style={{
            fontSize: s(16),
            marginTop: ms(5),
            fontWeight: '500',
            color: 'rgb(127 127 127)',
          }}>
          @snash
        </Text>
        <Image
          style={{
            height: ms(60),
            width: s(60),
            marginBottom: 50,
            marginTop: 35,
            borderColor:'white', borderWidth:2, shadowOpacity:0.6, shadowColor:'rgba(0 0 0/0.16)',
            shadowRadius: 5,
            // For Android shadow properties (elevation)
            
            borderRadius:4
          }}
          resizeMode="contain"
          source={require('/Users/deepak/Desktop/ReactProject/PhoneShakeD/src/assets/Homepage.png')}
        />
        <Text style={{fontSize: 14, color: 'rgb(32 142 251)'}}>
          Share QR Code
        </Text>
      </View>
    </View>
  );
};

export default Qrcode;
