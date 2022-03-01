import React ,{useState} from "react";
import { View , Text ,StyleSheet } from "react-native";
import SearchBar from "../components/searchBar";

const SearchScreen =()=>{
    const onTermSubmit = ()=> console.log("submit !!!")
    const [term,setTerm]=useState("");
    return <View>
       < SearchBar 
       term={term} 
       onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={onTermSubmit}
       />
       
    </View>
}

const styles = StyleSheet.create({});
export default SearchScreen ; 