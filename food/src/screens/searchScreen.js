import React, { useState ,useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/searchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";


const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [results,errorMsg,searchApi] = useResults();
  

 
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm)=>setTerm(newTerm)}
        onTermSubmit={()=>searchApi(term)}
      />
      <Text> {term}</Text>
      <Text> {results.length}</Text>
      {errorMsg ?   <Text> {errorMsg}</Text> : null }
    
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
