/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Content,
  Right,
  Body,
  ListItem,
  Left,
  List,
  H1,
  Icon,
} from 'native-base';
import Rating from '../../../components/svg/Rating';
import FiveStar from '../../../components/svg/FiveStars';
import ThreeStars from '../../../components/svg/ThreeStars';
import {Colors} from '../../../constants';

const AllReviews = () => {
  return (
    <Content style={{backgroundColor: Colors.background}}>
      <View padder>
        <H1>Reviews</H1>
        <View padder>
          <FiveStar />
          <Text style={{marginTop: 15}}>4.0 Great (6)</Text>
        </View>
      </View>
      <Content style={{borderBottomColor: Colors.grey, borderBottomWidth: 1}}>
        <List>
          <ListItem thumbnail>
            <Left>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: Colors.blue,
                }}>
                <Text style={{color: 'white'}}>MA</Text>
              </View>
            </Left>
            <Body>
              <Text>Mohammed Abdul Sami</Text>
              <Text numberOfLines={1} note>
                Nov 20 , 2020
              </Text>
            </Body>
            <Right>
              <FiveStar />
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: Colors.blue,
                }}>
                <Text style={{color: 'white'}}>MA</Text>
              </View>
            </Left>
            <Body>
              <Text>Mohammed Abdul Sami</Text>
              <Text numberOfLines={1} note>
                Nov 20 , 2020
              </Text>
            </Body>
            <Right>
              <ThreeStars />
            </Right>
          </ListItem>
        </List>
        <View padder>
          <Text>
            A beauty salon is an establishment that offers a variety of cosmetic
            treatments and cosmetic services for men.
          </Text>
        </View>
      </Content>
      <View
        padder
        style={{
          backgroundColor: Colors.primary,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
        }}>
        <Icon
          name="shield-checkmark"
          style={{color: 'white', width: '15%', marginLeft: 20}}
        />
        <View style={{width: '81%'}}>
          <Text style={{color: 'white'}}>{'Reviews you can trust '}</Text>
          <Text style={{color: 'white'}}>
            All our ratings are from genuine customers following verified
            visits.
          </Text>
        </View>
      </View>
      <List>
        <ListItem thumbnail>
          <Left>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: Colors.blue,
              }}>
              <Text style={{color: 'white'}}>MA</Text>
            </View>
          </Left>
          <Body>
            <Text>Mohammed Abdul Sami</Text>
            <Text numberOfLines={1} note>
              Nov 20 , 2020
            </Text>
          </Body>
          <Right>
            <FiveStar />
          </Right>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: Colors.blue,
              }}>
              <Text style={{color: 'white'}}>MA</Text>
            </View>
          </Left>
          <Body>
            <Text>Mohammed Abdul Sami</Text>
            <Text numberOfLines={1} note>
              Nov 20 , 2020
            </Text>
          </Body>
          <Right>
            <ThreeStars />
          </Right>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: Colors.blue,
              }}>
              <Text style={{color: 'white'}}>MA</Text>
            </View>
          </Left>
          <Body>
            <Text>Mohammed Abdul Sami</Text>
            <Text numberOfLines={1} note>
              Nov 20 , 2020
            </Text>
          </Body>
          <Right>
            <ThreeStars />
          </Right>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: Colors.blue,
              }}>
              <Text style={{color: 'white'}}>MA</Text>
            </View>
          </Left>
          <Body>
            <Text>Mohammed Abdul Sami</Text>
            <Text numberOfLines={1} note>
              Nov 20 , 2020
            </Text>
          </Body>
          <Right>
            <ThreeStars />
          </Right>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: Colors.blue,
              }}>
              <Text style={{color: 'white'}}>MA</Text>
            </View>
          </Left>
          <Body>
            <Text>Mohammed Abdul Sami</Text>
            <Text numberOfLines={1} note>
              Nov 20 , 2020
            </Text>
          </Body>
          <Right>
            <ThreeStars />
          </Right>
        </ListItem>
      </List>
    </Content>
  );
};

export default AllReviews;
