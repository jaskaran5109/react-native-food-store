import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Lottie from "lottie-react-native";
import firebase from "../firebase";
import "firebase/firestore";
import MenuItem from "../components/RestaurantDetails/MenuItem";
export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  } );
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <Lottie
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          loop
          speed={0.5}
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
        />
        <Text>
          Your Order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <MenuItem foods={lastOrder.items} isCheckBox={true} marginLeft={10}/>
        <Lottie
          source={require("../assets/animations/cooking.json")}
          autoPlay
          loop
          speed={0.5}
          style={{ height: 200, alignSelf: "center", marginBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
