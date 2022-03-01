import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/searchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/resultsList";

const SearchScreen = ({navigation}) => {
  //console.log(props.navigation.navigate())
  const [term, setTerm] = useState("");
  const [results, errorMsg, searchApi] = useResults();

  const filterResults = (price) => {
    const filteredArr = results.filter((element) => element.price === price);
    return filteredArr;
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMsg ? <Text> {errorMsg}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResults("$")}  navigation={navigation}title={"cost effective"} />
        <ResultsList results={filterResults("$$")} navigation={navigation}  title={"bit pricier"} />
        <ResultsList results={filterResults("$$$")}  navigation={navigation} title={"big spender"} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor : "red",
    borderWidth: 3,
  },
});
export default SearchScreen;
