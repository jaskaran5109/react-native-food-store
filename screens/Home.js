import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/Home/BottomTabs";
import Categories from "../components/Home/Categories";
import HeaderTabs from "../components/Home/HeaderTabs";
import RestaurantItem from "../components/Home/RestaurantItem";
import SearchBar from "../components/Home/SearchBar";
import { data } from "..//components/Home/RestaurantData";
const Home = ({navigation}) => {
  const [restaurantData, setRestaurantData] = useState(data);
  const [city, setCity] = useState("Indiana");
  const [activeTab, setActiveTab] = useState("Delivery");

  const yelp_api_key =
    "WcEZQKR5zIjTaS5vZTDZU4LetiI0Nt_9S4L2XhXUjQ7705M2p1KtpTkH_OUkgE6_t2lIkL_f9Nd-aKgQkCj2mTwwqUVPNDpaxyy7FFuK_vCz_jPZHV4RbgkRM40XY3Yx";

  const getRestaurantFromYelp = async () => {
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurent&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${yelp_api_key}`,
      },
    };
    return await fetch(url, apiOptions)
      .then((res) => res.json())
      .then((data) =>
        setRestaurantData(
          data.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  useEffect(() => {
    // getRestaurantFromYelp();
  }, [city, restaurantData, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1}}>
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
          width: "100%",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} navigation={navigation}/>
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
