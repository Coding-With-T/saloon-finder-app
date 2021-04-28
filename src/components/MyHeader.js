/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, H1, Text, Icon} from 'native-base';
import {Colors} from '../constants';

const MyHeader = ({title, heading, navigation}) => {
  return (
    <View style={{backgroundColor: Colors.primary, height: 160}}>
      <Icon
        name="arrowleft"
        type="AntDesign"
        style={{marginLeft: 15, color: 'white', marginTop: 10}}
        onPress={() => navigation.goBack()}
      />
      <View style={{marginTop: 30, marginLeft: 22}}>
        <Text style={{color: 'white', marginBottom: 15}}>{title}</Text>
        <H1 style={{textTransform: 'uppercase', color: 'white'}}>{heading}</H1>
      </View>
    </View>
  );
};

export default MyHeader;
