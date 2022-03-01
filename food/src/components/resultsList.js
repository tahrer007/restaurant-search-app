import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title} </Text>
      <Text> results is : {results.length}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({item}) => {
          return <Text> {item.name}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default ResultsList;
