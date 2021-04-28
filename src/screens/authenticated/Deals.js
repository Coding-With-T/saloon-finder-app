/* eslint-disable react-native/no-inline-styles */
import {
  Content,
  View,
  Text,
  H3,
  H2,
  Icon,
  Button,
  H1,
  List,
  ListItem,
  Radio,
} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import Grid from '../../components/Grid';

import SaloonCard from '../../components/SaloonCard';
import {Colors, WIDTH} from '../../constants';

const Deals = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [shownearby, setShownearby] = useState(false);
  const [gender, setGender] = useState(false);
  const [showDeals, setShowDeals] = useState('');
  const sloonCardData = [
    {
      _id: 1,
      badgeText: 'Unique',
      badgeText1: 'New',
      badgeColor: 'purple',
      badgeColor1: Colors.blue,
      dHeading: 'Some Name of Saloon',
      subHeading:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam rem laboriosam tenetur nulla, sit error.',
      ratingText: '4.0 Great',
      count: 6,
      distance: '3.5Km',
      locationColor: 'white',
      img: require('../../../assets/img/womenS.jpg'),

      textColor: 'white',
    },
    {
      _id: 2,
      badgeText: 'Unique',
      badgeText1: 'New',
      badgeColor: 'purple',
      badgeColor1: Colors.blue,
      dHeading: 'Some Name of Saloon',
      subHeading:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam rem laboriosam tenetur nulla, sit error.',
      ratingText: '4.0 Great',
      count: 6,
      distance: '3.5Km',
      locationColor: 'white',
      img: require('../../../assets/img/womenS.jpg'),

      textColor: 'white',
    },
    {
      _id: 3,
      badgeText: 'Unique',
      badgeText1: 'New',
      badgeColor: 'purple',
      badgeColor1: Colors.blue,
      dHeading: 'Some Name of Saloon',
      subHeading:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam rem laboriosam tenetur nulla, sit error.',
      ratingText: '4.0 Great',
      count: 6,
      distance: '3.5Km',
      locationColor: 'white',
      img: require('../../../assets/img/womenS.jpg'),

      textColor: 'white',
    },
  ];
  const _renderItem = ({item}) => {
    if (item.empty) {
      return <View style={{flex: 1, backgroundColor: 'transparnet'}} />;
    }
    return (
      <SafeAreaView style={{flex: 1, marginRight: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: selectedItem === item.title ? '#FFB78B' : 'white',
            borderRadius: 20,
            width: 100,
            paddingVertical: 10,
            alignItems: 'center',
          }}
          onPress={item.onPress}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: Colors.lightOrange,
                textTransform: 'capitalize',
                fontSize: 16,
              }}>
              {item.title}
            </Text>
            <Icon
              name="down"
              type="AntDesign"
              style={{
                fontSize: 16,
                color: Colors.lightOrange,
                alignSelf: 'center',
                marginTop: 3,
                marginLeft: 2,
              }}
            />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  const data = [
    {
      _id: 1,
      title: 'Nearby',
      onPress: () => {
        setSelectedItem('Nearby');
        setShownearby(!shownearby);
      },
    },
    {
      _id: 2,
      title: 'Gender',
      onPress: () => {
        setSelectedItem('Gender');
        setGender(true);
      },
    },
    {
      _id: 3,
      title: 'Deals',
      onPress: () => {
        setSelectedItem('Deals');
        setShowDeals(!showDeals);
      },
    },
  ];
  return (
    <Content style={{backgroundColor: Colors.background}}>
      <View padder>
        <View style={{marginVertical: 15, flexGrow: 1}}>
          <View
            padder
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: 'white',
              width: WIDTH * 0.9,
              alignSelf: 'center',
              height: 40,
            }}>
            <Icon name="arrowleft" type="AntDesign" />
            <Text style={{fontSize: 12}}>
              Search for Deals, Beauty Saloons, Services ect
            </Text>
            <Icon name="search" style={{fontSize: 20}} />
          </View>
          <View padder>
            <Grid data={data} _renderItem={_renderItem} noOfColumns={3} />
          </View>
        </View>
        <View padder>
          <H2 style={{textTransform: 'uppercase', marginBottom: 15}}>
            {'365 Results for the beauty \nsaloon near you'}
          </H2>
          <H3>Nearby Saloons</H3>
        </View>
        {sloonCardData.map((item) => (
          <SaloonCard
            key={item._id}
            badgeText={item.badgeText}
            badgeText1={item.badgeText1}
            badgeColor={item.badgeColor}
            badgeColor1={item.badgeColor1}
            dHeading={item.dHeading}
            subHeading={item.subHeading}
            ratingText={item.ratingText}
            count={item.count}
            distance={item.distance}
            locationColor={Colors.grey}
            img={item.img}
            textColor={'black'}
          />
        ))}
      </View>
      <NearbyModal
        modalVisible={shownearby}
        setModalVisible={() => {
          setShownearby(!shownearby);
          //   setGender(false);
          //   setShownearby(false);
        }}
      />
      <GenderModal
        modalVisible={gender}
        setModalVisible={() => {
          setGender(!gender);
          //   setShownearby(false);
          //   setShowDeals(false);
        }}
      />
      <DealsModal
        modalVisible={showDeals}
        setModalVisible={() => {
          setShowDeals(!showDeals);
          //   setShownearby(false);
          //   setGender(false);
        }}
      />
    </Content>
  );
};

const NearbyModal = ({modalVisible, setModalVisible}) => {
  const [price, setprice] = useState(50);
  const [mile, setMile] = useState(0);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {}}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: -20,
              backgroundColor: 'white',
              height: 40,
              width: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={setModalVisible}>
            <Icon name="cross" type="Entypo" />
          </TouchableOpacity>
          <H1
            style={{
              borderBottomColor: Colors.primary,
              borderBottomWidth: 2,
              textTransform: 'uppercase',
            }}>
            Near By
          </H1>
          <H3
            style={{
              textTransform: 'uppercase',
              alignSelf: 'flex-start',
              marginTop: 20,
              color: Colors.primary,
            }}>
            Price Range
          </H3>
          <View padder>
            <Slider
              minimumValue={50}
              maximumValue={5000}
              minimumTrackTintColor={Colors.primary}
              maximumTrackTintColor={Colors.grey}
              style={{width: WIDTH * 0.85, opacity: 1}}
              thumbTintColor={Colors.primary}
              onValueChange={(value) => setprice(value)}
              step={1}
            />
            <View
              padder
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: Colors.primary,
                }}>
                50 AED
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: Colors.primary,
                }}>
                {price} AED
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: Colors.primary,
                }}>
                50000 AED
              </Text>
            </View>
          </View>
          <H3
            style={{
              textTransform: 'uppercase',
              alignSelf: 'flex-start',
              marginTop: 20,
              color: Colors.primary,
            }}>
            Select Range
          </H3>
          <View padder>
            <Slider
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor={Colors.primary}
              maximumTrackTintColor={Colors.grey}
              style={{width: WIDTH * 0.85, opacity: 1}}
              thumbTintColor={Colors.primary}
              onValueChange={(value) => setMile(value)}
              step={1}
            />
            <View
              padder
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: Colors.primary,
                }}>
                0 KM
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: Colors.primary,
                }}>
                {mile} KM
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: Colors.primary,
                }}>
                100 KM
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const GenderModal = ({modalVisible, setModalVisible}) => {
  const [selectedGender, setSelectedGender] = useState('');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {}}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: -20,
              backgroundColor: 'white',
              height: 40,
              width: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={setModalVisible}>
            <Icon name="cross" type="Entypo" />
          </TouchableOpacity>
          <H1
            style={{
              borderBottomColor: Colors.primary,
              borderBottomWidth: 2,
              textTransform: 'uppercase',
            }}>
            Select Gender
          </H1>
          <View
            padder
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'flex-start',
              marginTop: 15,
              borderBottomWidth: 1,
              width: WIDTH * 0.7,
              borderBottomColor: Colors.grey,
            }}>
            <Radio
              color={'red'}
              selectedColor={Colors.primary}
              selected={selectedGender === 'male'}
              onPress={() => setSelectedGender('male')}
            />
            <H3
              style={{
                textTransform: 'uppercase',
                color: Colors.primary,
                marginLeft: 20,
              }}>
              Male
            </H3>
          </View>
          <View
            padder
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'flex-start',
              marginTop: 15,
              borderBottomWidth: 1,
              width: WIDTH * 0.7,
              borderBottomColor: Colors.grey,
            }}>
            <Radio
              color={'red'}
              selectedColor={Colors.primary}
              selected={selectedGender === 'female'}
              onPress={() => setSelectedGender('female')}
            />
            <H3
              style={{
                textTransform: 'uppercase',
                color: Colors.primary,
                marginLeft: 20,
              }}>
              Female
            </H3>
          </View>
          <View
            padder
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'flex-start',
              marginTop: 15,
              borderBottomWidth: 1,
              width: WIDTH * 0.7,
              borderBottomColor: Colors.grey,
            }}>
            <Radio
              color={'red'}
              selectedColor={Colors.primary}
              selected={selectedGender === 'mf'}
              onPress={() => setSelectedGender('mf')}
            />
            <H3
              style={{
                textTransform: 'uppercase',
                color: Colors.primary,
                marginLeft: 20,
              }}>
              {'Male & Female'}
            </H3>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const DealsModal = ({modalVisible, setModalVisible}) => {
  const [selectedGender, setSelectedGender] = useState('');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {}}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: -20,
              backgroundColor: 'white',
              height: 40,
              width: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={setModalVisible}>
            <Icon name="cross" type="Entypo" />
          </TouchableOpacity>
          <H1
            style={{
              borderBottomColor: Colors.primary,
              borderBottomWidth: 2,
              textTransform: 'uppercase',
            }}>
            Latest Deals
          </H1>
          <View
            padder
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'flex-start',
              marginTop: 15,
              borderBottomWidth: 1,
              width: WIDTH * 0.7,
              borderBottomColor: Colors.grey,
            }}>
            <H3
              style={{
                textTransform: 'uppercase',
                color: Colors.primary,
              }}>
              Newest Deals
            </H3>
          </View>
          <View
            padder
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'flex-start',
              marginTop: 15,
              borderBottomWidth: 1,
              width: WIDTH * 0.7,
              borderBottomColor: Colors.grey,
            }}>
            <H3
              style={{
                textTransform: 'uppercase',
                color: Colors.primary,
              }}>
              Lowest Price Deals
            </H3>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    width: WIDTH * 0.9,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
export default Deals;
