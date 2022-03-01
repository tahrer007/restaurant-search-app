import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.title}>{result.name} </Text>
      <Text style={styles.rating}>
        {result.rating} stars , {result.review_count} reviews{" "}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom:5,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  rating: {},
});
export default ResultsDetails;
