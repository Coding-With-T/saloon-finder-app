import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';
import Saloon from '../screens/auth/Saloon';
import ChangeLang from '../screens/auth/ChangeLang';

const Auth = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="Saloon" component={Saloon} />
      <AuthStack.Screen name="ChangeLang" component={ChangeLang} />
    </AuthStack.Navigator>
  );
};

export default Auth;
