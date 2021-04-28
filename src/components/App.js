import React from 'react';
import {StatusBar} from 'react-native';
import {Root} from 'native-base';
import RootNavigation from '../navigation';
import {Colors} from '../constants';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
      <RootNavigation />
    </>
  );
};

export default App;
