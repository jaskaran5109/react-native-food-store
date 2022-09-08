import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cartReducer from "../../redux/reducers/cartReducer";

export default function MenuItem(props) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: props.restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title == food.title));

  return (
    <ScrollView
      style={{ marginHorizontal: 20, marginTop: 20 }}
      showsVerticalScrollIndicator={false}
    >
      {props.foods.map((item, index) => (
        <View
          key={index}
          style={{
            borderBottomColor: "lightgray",
            borderBottomWidth: 1,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            {props.isCheckBox ? (
              <></>
            ) : (
              <BouncyCheckbox
                fillColor="green"
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                onPress={(checkboxValue) => selectItem(item, checkboxValue)}
                isChecked={isFoodInCart(item, cartItems)}
              />
            )}
            <FoodInfo
              title={item.title}
              description={item.description}
              price={item.price}
            />
            <FoodImage image={item.image} marginLeft={props.marginLeft} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
const FoodInfo = (props) => (
  <View style={{ width: "53%", justifyContent: "space-between" }}>
    <Text style={{ fontSize: 19, fontWeight: "600" }}>{props.title}</Text>
    <Text>{props.description}</Text>
    <Text>{props.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <Image
    source={{ uri: props.image }}
    style={{ height: 100, width: 100, borderRadius: 10,marginLeft:props.marginLeft}}
  />
);
const styles = StyleSheet.create({});
