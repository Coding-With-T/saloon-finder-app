/* eslint-disable react-native/no-inline-styles */

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Icon} from 'native-base';
import React from 'react';
import {Colors} from '../constants';
import Details from '../screens/authenticated/details/Details';
import Callus from '../screens/authenticated/details/Callus';
import Whatsapp from '../screens/authenticated/details/Whatsapp';

const Saloon = () => {
  const SaloonStack = createMaterialBottomTabNavigator();
  return (
    <SaloonStack.Navigator
      activeColor={Colors.primary}
      barStyle={{backgroundColor: 'white'}}>
      <SaloonStack.Screen
        name="Details"
        component={Details}
        options={{
          tabBarLabel: 'Drive',
          tabBarIcon: ({focused}) => (
            <Icon
              name="steering"
              style={{fontSize: 26, color: focused ? Colors.primary : 'black'}}
              type="MaterialCommunityIcons"
            />
          ),
        }}
      />
      <SaloonStack.Screen
        name="Callus"
        component={Callus}
        options={{
          tabBarLabel: 'Call Us',
          tabBarIcon: ({focused}) => (
            <Icon
              name="phone"
              style={{fontSize: 26, color: focused ? Colors.primary : 'black'}}
              type="Feather"
            />
          ),
        }}
      />
      <SaloonStack.Screen
        name="Whatsapp"
        component={Whatsapp}
        options={{
          tabBarLabel: 'Whatsapp',
          tabBarIcon: ({focused}) => (
            <Icon
              name="whatsapp"
              style={{fontSize: 26, color: focused ? Colors.primary : 'black'}}
              type="FontAwesome"
            />
          ),
        }}
      />
    </SaloonStack.Navigator>
  );
};

export default Saloon;
