/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Card, Content, H3} from 'native-base';
import {SafeAreaView} from 'react-native';
import {Colors} from '../../../constants';
import Grid from '../../../components/Grid';
import MyHeader from '../../../components/MyHeader';

const AllStaff = ({navigation}) => {
  const data = [
    {
      _id: 1,
      name: 'Peter',
      pro: 'Hairdresser',
    },
    {
      _id: 2,
      name: 'Sarah',
      pro: 'Nail Artist',
    },
    {
      _id: 3,
      name: 'Erick',
      pro: 'EyelMaker',
    },
    {
      _id: 4,
      name: 'Erick',
      pro: 'EyelMaker',
    },
    {
      _id: 5,
      name: 'Erick',
      pro: 'EyelMaker',
    },
    {
      _id: 6,
      name: 'Erick',
      pro: 'EyelMaker',
    },
    {
      _id: 7,
      name: 'Erick',
      pro: 'EyelMaker',
    },
    {
      _id: 8,
      name: 'Erick',
      pro: 'EyelMaker',
    },
    {
      _id: 8,
      name: 'Erick',
      pro: 'EyelMaker',
    },
  ];
  const _renderItem = ({item}) => {
    if (item.empty) {
      return <View style={{flex: 1, backgroundColor: 'transparnet'}} />;
    }
    return (
      <SafeAreaView style={{flex: 1}}>
        <Card
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
            paddingVertical: 15,
          }}>
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              backgroundColor: '#c4c4c4',
            }}>
            <Text style={{fontSize: 35}}>{item.name[0]}</Text>
          </View>
          <H3>{item.name}</H3>
          <H3 style={{color: Colors.primary}}>{item.pro}</H3>
        </Card>
      </SafeAreaView>
    );
  };
  return (
    <Content>
      <MyHeader
        heading="special list"
        title="Step 2 of 4"
        navigation={navigation}
      />
      <Grid data={data} _renderItem={_renderItem} noOfColumns={3} />
    </Content>
  );
};

export default AllStaff;
