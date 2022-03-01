import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ResultsList = ({ title, filteredResults }) => {
  return (
    <View>
      <Text style={styles.title}>{title} </Text>
      <Text> results is : {filteredResults.length}</Text>
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
