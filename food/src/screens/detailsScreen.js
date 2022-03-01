import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet ,FlatList ,Image } from "react-native";
import yelp from "../api/yelp";

const DetailsScreen = ({ route }) => {
  const { id } = route.params;
  const [photos, setPhotos] = useState([]);

  const getPhotos = async (id) => {
    //console.log(id)
    const response = await yelp.get(`/${id}`);
    setPhotos(response.data.photos);
  };

  useEffect(() => {
    if (!id) return;
    getPhotos(id);
  }, []);

  return (
    <View>
     <FlatList 
        data = {photos}
        keyExtractor={(photo)=>photo}
        renderItem={({item})=>{
            return(
                            <Image style={styles.image} source={{uri : item}}/>
                )
        }
        }
     />
    </View>
  );
};

const styles = StyleSheet.create({
    image : {
        width : 250 ,
        height : 250 ,
        margin : 10

    }
});
export default DetailsScreen;
