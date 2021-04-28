import {Content, View, Text, H3} from 'native-base';
import React from 'react';

import MyHeader from '../../components/MyHeader';
import SaloonCard from '../../components/SaloonCard';
import {Colors} from '../../constants';

const Saved = ({navigation}) => {
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
  return (
    <Content style={{backgroundColor: Colors.background}}>
      <MyHeader
        title={'Your Favorite'}
        heading="Save Saloons"
        navigation={navigation}
      />
      <View padder>
        <H3>My List</H3>
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
            saved={true}
          />
        ))}
      </View>
    </Content>
  );
};

export default Saved;
