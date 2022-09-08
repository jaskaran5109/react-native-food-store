import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const HeaderTabs = ({activeTab, setActiveTab}) => {
  return (
    <View style={{ flexDirection: "row",justifyContent: "center"}}>
      <Headerbutton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Headerbutton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const Headerbutton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ?"black":"white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={()=>props.setActiveTab(props.text)}
  >
    <Text style={{ color: props.activeTab === props.text ?"white":"black", fontSize: 15, fontWeight: "900" }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({});
