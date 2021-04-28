/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screens/authenticated/Home';
import {Colors} from '../constants';
import{Image } from "react-native"
import {Icon} from 'native-base';
import Deals from '../screens/authenticated/Deals';
import Saved from '../screens/authenticated/Saved';
import Profile from '../screens/authenticated/Profile';
import {createStackNavigator} from '@react-navigation/stack';
import Details from '../screens/authenticated/details/Details';

const Authenticated = () => {
  const AuthenticatedStack = createMaterialBottomTabNavigator();

  return (
    <AuthenticatedStack.Navigator
      activeColor={Colors.primary}
      barStyle={{backgroundColor: 'white'}}>
      <AuthenticatedStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon
              name="home-outline"
              style={{fontSize: 26, color: focused ? Colors.primary : 'black'}}
            />
          ),
        }}
      />
      <AuthenticatedStack.Screen
        name="Deals"
        component={Deals}
        options={{
          tabBarLabel: 'Deals',
          tabBarIcon: ({focused}) => (
            <Image source={require("../../assets/img/Group274.png")} style={{height:26, width:26, resizeMode:'contain'}}/>

            // <Icon
            //   name="brightness-percent"
            //   style={{fontSize: 26, color: focused ? Colors.primary : 'black'}}
            //   type="MaterialCommunityIcons"
            // />
          ),
        }}
      />
      <AuthenticatedStack.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({focused}) => (
            <Image source={require("../../assets/img/Group275.png")} style={{height:26, width:26, resizeMode:'contain'}}/>

          ),
        }}
      />
      <AuthenticatedStack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              style={{fontSize: 26, color: focused ? Colors.primary : 'black'}}
              type="AntDesign"
            />
          ),
        }}
      />
    </AuthenticatedStack.Navigator>
  );
};

export default Authenticated;
