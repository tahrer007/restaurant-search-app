import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.backGround}>
      <Ionicons
        name="search-circle-sharp"
        style={styles.iconStyle}
        color="black"
      />
      <TextInput style={styles.inputStyle} placeholder="search ....." />
    </View>
  );
};
const styles = StyleSheet.create({
  backGround: {
    backgroundColor: "#EEEDE7",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
  },
});
export default SearchBar;
