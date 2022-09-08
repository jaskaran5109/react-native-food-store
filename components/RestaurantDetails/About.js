import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const About = (props) => {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;
  const formattedCategories = categories.map((cat) => cat).join(" • ");
  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        paddingBottom: 15,
      }}
    >
      <RestaurantImage image={image} />
      <RestaurantTitle text={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;
const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);
const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.text}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      fontSize: 15.5,
      fontWeight: "400",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.description}
  </Text>
);
const styles = StyleSheet.create({});
