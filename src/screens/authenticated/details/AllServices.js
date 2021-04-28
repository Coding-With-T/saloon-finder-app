/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Content,
  List,
  ListItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
  H1,
  H3,
} from 'native-base';
import {Colors, WIDTH} from '../../../constants';
import {SafeAreaView, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const AllServices = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const data = ['FEATURED', 'HAIR', 'HAIR COLORING', 'Some Service', 'Sl'];

  return (
    <Content style={{backgroundColor: Colors.background}}>
      <View style={{backgroundColor: Colors.primary}}>
        <Icon
          name="arrowleft"
          type="AntDesign"
          style={{marginLeft: 15, color: 'white', marginTop: 10}}
          onPress={() => navigation.goBack()}
        />
        <View style={{marginTop: 15, marginLeft: 22}}>
          <Text style={{color: 'white', marginBottom: 15}}>
            {'Step 1 of 4'}
          </Text>
          <H1 style={{textTransform: 'uppercase', color: 'white'}}>
            {'select service'}
          </H1>
        </View>
        <View padder>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => setSelected(item)}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 10,
                  backgroundColor:
                    selected !== item ? Colors.primary : Colors.background,
                }}>
                <Text
                  style={{
                    color: selected !== item ? 'white' : Colors.primary,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
      <View padder>
        <H3>Featured</H3>
      </View>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require('../../../../assets/img/service.png')}
              />
            </Left>
            <Body>
              <Text>eyebrow threading</Text>
              <Text
                numberOfLines={1}
                style={{fontSize: 18, color: Colors.primary}}>
                15min
              </Text>
            </Body>
            <Right>
              <Text>aed 30</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require('../../../../assets/img/service.png')}
              />
            </Left>
            <Body>
              <Text>haircut</Text>
              <Text
                numberOfLines={1}
                style={{fontSize: 18, color: Colors.primary}}>
                1h
              </Text>
            </Body>
            <Right>
              <Text style={{color: Colors.primary, fontSize: 18}}>
                Start From
              </Text>

              <Text>aed 30</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require('../../../../assets/img/service.png')}
              />
            </Left>
            <Body>
              <Text>eyebrow threading</Text>
              <Text
                numberOfLines={1}
                style={{fontSize: 18, color: Colors.primary}}>
                15min
              </Text>
            </Body>
            <Right>
              <Text>aed 30</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
      <View padder>
        <H3>Hair</H3>
      </View>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require('../../../../assets/img/service.png')}
              />
            </Left>
            <Body>
              <Text>eyebrow threading</Text>
              <Text
                numberOfLines={1}
                style={{fontSize: 18, color: Colors.primary}}>
                15min
              </Text>
            </Body>
            <Right>
              <Text>aed 30</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require('../../../../assets/img/service.png')}
              />
            </Left>
            <Body>
              <Text>haircut</Text>
              <Text
                numberOfLines={1}
                style={{fontSize: 18, color: Colors.primary}}>
                1h
              </Text>
            </Body>
            <Right>
              <Text style={{color: Colors.primary, fontSize: 18}}>
                Start From
              </Text>

              <Text>aed 30</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require('../../../../assets/img/service.png')}
              />
            </Left>
            <Body>
              <Text>eyebrow threading</Text>
              <Text
                numberOfLines={1}
                style={{fontSize: 18, color: Colors.primary}}>
                15min
              </Text>
            </Body>
            <Right>
              <Text>aed 30</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
      <View padder>
        <H3>Hair Coloring</H3>
      </View>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require('../../../../assets/img/service.png')}
              />
            </Left>
            <Body>
              <Text>eyebrow threading</Text>
              <Text
                numberOfLines={1}
                style={{fontSize: 18, color: Colors.primary}}>
                15min
              </Text>
            </Body>
            <Right>
              <Text>aed 30</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require('../../../../assets/img/service.png')}
              />
            </Left>
            <Body>
              <Text>haircut</Text>
              <Text
                numberOfLines={1}
                style={{fontSize: 18, color: Colors.primary}}>
                1h
              </Text>
            </Body>
            <Right>
              <Text style={{color: Colors.primary, fontSize: 18}}>
                Start From
              </Text>

              <Text>aed 30</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require('../../../../assets/img/service.png')}
              />
            </Left>
            <Body>
              <Text>eyebrow threading</Text>
              <Text
                numberOfLines={1}
                style={{fontSize: 18, color: Colors.primary}}>
                15min
              </Text>
            </Body>
            <Right>
              <Text>aed 30</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Content>
  );
};

export default AllServices;
