import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/searchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");
  const [errorMsg ,setErrorMsg]=useState("")
  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
        setErrorMsg("something is wrong , try again later ");
    }
  };

 
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm)=>setTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      <Text> {term}</Text>
      <Text> {results.length}</Text>
      {errorMsg ?   <Text> {errorMsg}</Text> : null }
    
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
