import React from 'react';
import {View, StyleSheet} from 'react-native';
import {s, ms, mvs} from 'react-native-size-matters';

const Styles = StyleSheet.create({
  UserProfile: {
    flex: 0.41,
    backgroundColor: 'rgb(247 247 247)',
    alignItems: 'center',
    borderBottomColor:'rgb(204 204 204)',
    borderBottomWidth:0.5
  },
  SettingIcon: {
    flexDirection: 'row-reverse',
    marginLeft: 20,
    marginTop: ms(10),
    width: '100%',
  },
  UserImage: {
    height: mvs(100),
    width: mvs(100),
    borderRadius: mvs(50),
    borderColor: 'white',
    borderWidth: 2,
    shadowOpacity: 0.6,
    shadowColor: 'rgb(0 0 0)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    

  },
  UserBadgeIcon: {
    height: mvs(35),
    width: mvs(35),
    borderRadius: mvs(35/2),
    position: 'absolute',
    marginLeft: s(75),
    borderColor: 'white',
    borderWidth: 2,
    shadowOpacity: 0.6,
    shadowColor: 'rgba(0 0 0/0.16)',
    backgroundColor:'white'
  },
  UserName: {
    textAlign: 'center',
    fontSize: s(20),
    fontWeight: '500',
    color: 'rgb(0 0 0)',
    marginTop: ms(12),
    letterSpacing:0.01
  },
  UserDesignation: {
    textAlign: 'center',
    fontSize: s(11),
    color: 'rgb(127 127 127)',
    marginTop: ms(3)
  },
  UserBio: {
    textAlign: 'center',
    fontSize: s(12),
    color: 'rgb(0 0 0)',
    marginTop: ms(5),
    width:'90%'
  },
  utilities:{
    justifyContent: 'space-between',
    flex: 0.63,
    backgroundColor: '#ffff',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderWidth: 20,
    borderColor: 'white',
    columnGap:11,
    alignSelf:'flex-start'
  }
});

export default Styles;
