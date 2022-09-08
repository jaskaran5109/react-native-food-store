import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const SearchBar = ({setCity}) => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row", alignItems: "center" }}>
      <GooglePlacesAutocomplete
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 3,
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24}></Ionicons>
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "white",
              padding: 10,
              borderRadius: 20,
            }}
          >
            <AntDesign
              name="clockcircle"
              size={15}
              style={{ marginRight: 6 }}
            ></AntDesign>
            <Text>Search</Text>
          </View>
        )}
        onPress={(data, details = null) => {
          setCity(data.description.split(",")[0]);
          console.log(data.description.split(",")[0])
        }}
        minLength={2}
        placeholder="Search"
        query={{
          key: "AIzaSyBhFjB65D-BrcNkm9vrRydvRNBPzfmVgjc",
        }}
      />
      <FontAwesome name="filter" size={24} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
