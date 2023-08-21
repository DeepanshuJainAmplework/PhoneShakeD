import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {} from 'react-native-gesture-handler';
import {s} from 'react-native-size-matters';

const ModalComponent = ({logoutpress, visible, onClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={style.overlay}>
        <TouchableWithoutFeedback onPressIn={onClose}>
          <View style={{flex: 0.7}}></View>
        </TouchableWithoutFeedback>
        <View style={style.container}>
          <View style={style.view}>
            <Text style={[style.text, {fontWeight: 700}]}>Logout</Text>
            <Text style={[style.text]}>Are you sure you want to Logout?</Text>
          </View>
          <View style={[style.view, {flex: 0.65}]}>
            <Text onPress={logoutpress} style={style.options}>
              Logout
            </Text>
            <Text
              style={[style.options, {color: 'rgb(168 168 168)'}]}
              onPress={onClose}>
              Cancel
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const ModalUtil = props => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      <View style={{flex:1, }}>
        <TouchableWithoutFeedback onPressIn={props.onClose}>
          <View style={{flex:0.37,}}>

          </View>
        </TouchableWithoutFeedback>
        <View style={{flex:0.54,}}>
          {props.children}

        </View>
        <TouchableWithoutFeedback onPressIn={props.onClose}>
        <View style={{flex:0.09}}>

        </View>
        </TouchableWithoutFeedback>

      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(25 25 25/0.5)',
  },
  container: {
    flex: 0.3,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text: {
    color: 'rgb(168 168 168)',
    fontSize: s(14),
    textAlign: 'center',
  },
  view: {
    justifyContent: 'space-evenly',
    flex: 0.45,
  },
  options: {
    fontSize: s(16),
    color: 'rgb(243 60 87)',
  },
});

export {ModalComponent, ModalUtil};
