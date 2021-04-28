import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';

const Grid = ({data, noOfColumns, _renderItem}) => {
  const {container} = styles;

  const formateDate = (dataList, numCol) => {
    const totalRows = Math.floor(dataList.length / numCol);
    let totalLastRow = dataList.length - totalRows * numCol;
    while (totalLastRow !== 0 && totalLastRow !== numCol) {
      dataList.push({empty: true});
      totalLastRow++;
    }
    return dataList;
  };

  return (
    <SafeAreaView style={container}>
      <FlatList
        data={formateDate(data, noOfColumns)}
        keyExtractor={(item, index) => item._id}
        renderItem={_renderItem}
        numColumns={noOfColumns}
        key={noOfColumns}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
  },
});
export default Grid;
