/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Card, H3, Icon, Item, Text, View, Picker} from 'native-base';
import {Colors} from '../../constants';

const ChangeLang = ({navigation}) => {
  const [lang, setLang] = useState('English');
  return (
    <View
      style={{
        backgroundColor: Colors.background,
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <View style={{flex: 9}}>
        <View padder>
          <Icon name="arrowleft" type="AntDesign" style={{marginBottom: 20}} />
        </View>
        <View style={{paddingHorizontal: 30}}>
          <H3 style={{textTransform: 'uppercase', paddingVertical: 20}}>
            Change Language
          </H3>
          <Text style={{marginBottom: 25}}>
            Set your language and location for the best Saloon Finder experience
          </Text>
          <Text style={{marginVertical: 4, color: Colors.black}}>
            Mobile Number
          </Text>
          <Card>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{
                  borderRightWidth: 2,
                  borderColor: 'red',
                }}
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={lang}
                onValueChange={(value) => {
                  setLang(value);
                }}>
                <Picker.Item label="English" value="English" />
                <Picker.Item label="Urdu" value="Urdu" />
              </Picker>
            </Item>
          </Card>
        </View>
      </View>
      <View padder style={{flex: 1}}>
        <Button
          full
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: Colors.primary,
            marginBottom: 20,
            height: 40,
            marginTop: 20,
          }}>
          <Text>Save</Text>
        </Button>
      </View>
    </View>
  );
};

export default ChangeLang;
