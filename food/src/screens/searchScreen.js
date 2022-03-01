import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/searchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/resultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, errorMsg, searchApi] = useResults();

  const filterResults = (price) => {
    const filteredArr = results.filter((element) => element.price === price);
    return filteredArr ; 
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text> {term}</Text>
      <Text> {results.length}</Text>
      {errorMsg ? <Text> {errorMsg}</Text> : null}
      <ResultsList
        results={filterResults("$")}
        title={"cost effective"}
      />
      <ResultsList
        results={filterResults("$$")}
        title={"bit pricier"}
      />
      <ResultsList
        results={filterResults("$$$")}
        title={"big spender"}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
