import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const RestaurantItem = ({ navigation, ...props }) => {
  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
    <>
      {props.restaurantData.map((item, index) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("RestaurantDetails", {
            name:item.name,
            image:item.image_url,
            rating:item.rating,
            price:item.price,
            reviews:item.reviews,
            categories:item.categories,
          })}
          style={{
            marginVertical: 10,
            padding: 15,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <RestaurentImage src={item.image_url} />
          <RestaurantInfo name={item.name} rating={item.rating} />
        </TouchableOpacity>
      ))}
    </>
    // </ScrollView>
  );
};

export default RestaurantItem;
const RestaurentImage = (props) => (
  <View>
    <Image
      source={{
        uri: props.src,
      }}
      style={{
        width: "100%",
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <AntDesign name="hearto" size={25} style={{ color: "white" }} />
    </TouchableOpacity>
  </View>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 : min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({});
