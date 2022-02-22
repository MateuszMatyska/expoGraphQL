import React from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "./ListStyles";

const List = ({ data }) => {
  const renderItem = ({item}) => { 
    debugger;
    return(
    <View style={styles.ItemWrapper}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );}

  debugger;

  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.list}
        data={[data]}
        renderItem={renderItem}
        keyExtractor={(item) => item.name} 
    />
    </View>
  );
};

export default List;
