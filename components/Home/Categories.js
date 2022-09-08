import { FlatList, Image, StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Items = [
  {
    image: <Fontisto name="shopping-bag-1" size={54} />,
    text: "Pickup",
  },
  {
    image: <Entypo name="drink" size={54} />,
    text: "Beverages",
  },
  {
    image: <Ionicons name="ios-fast-food-sharp" size={54} />,
    text: "Fast Food",
  },
  {
    image: <MaterialCommunityIcons name="bread-slice" size={54} />,
    text: "Bakery Items",
  },
  {
    image: <FontAwesome5 name="ideal" size={54} />,
    text: "Deals",
  },
];
const Categories = () => {
  return (
    <ScrollView
      style={{
        marginTop: 5,
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal:10
      }}
      horizontal
    >
      {Items.map((item, index) => (
        <View
          style={{ alignItems: "center", marginRight: 30,flexDirection: "column" }}
          key={index}
        >
          <View style={{ width: 50, height: 40, resizeMode: "contain" }}>
            {item.image}
          </View>
          <Text style={{ fontSize: 13, fontWeight: "900" }}>
            {item.text}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
