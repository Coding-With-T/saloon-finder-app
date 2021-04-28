import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AllServices from '../screens/authenticated/details/AllServices';
import AllStaff from '../screens/authenticated/details/AllStaff';
import AllReviews from '../screens/authenticated/details/AllReviews';
import AllDeals from '../screens/authenticated/details/AllDeals';
import StaffService from '../screens/authenticated/details/StaffService';

const Details = () => {
  const DetailsStack = createStackNavigator();
  return (
    <DetailsStack.Navigator screenOptions={{headerShown: false}}>
      <DetailsStack.Screen name="AllServices" component={AllServices} />
      <DetailsStack.Screen name="AllStaff" component={AllStaff} />
      <DetailsStack.Screen name="AllReviews" component={AllReviews} />
      <DetailsStack.Screen name="AllDeals" component={AllDeals} />
      <DetailsStack.Screen name="StaffService" component={StaffService} />
    </DetailsStack.Navigator>
  );
};

export default Details;
