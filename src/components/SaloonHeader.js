import React from 'react';
import {View, H3, Icon} from 'native-base';

const SaloonHeader = ({heading, color}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <H3
        style={[{color: color ? color : 'white'}]}>
        {heading}
      </H3>
      <Icon
        name="right"
        type="AntDesign"
        style={{color: color ? color : 'white'}}
      />
    </View>
  );
};

export default SaloonHeader;
