import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryTextSlider from "../Components/CategoryTextSlider";
import Colors from "../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";
import TopHeadLineSlider from "../Components/TopHeadLineSlider";
import HeadlineList from "../Components/HeadlineList";
import GlobalApi from "../Services/GlobalApi";
import { ActivityIndicator } from "react-native";
import { Dimensions } from "react-native";

const Home = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // getTopHeadline()
    getNewsByCategory("latest");
  }, []);

  const getNewsByCategory = async (category) => {
    setLoading(true);
    const result = (await GlobalApi.getByCategory(category)).data;
    setNewsList(result.articles);
    // console.log('>>>> ', newsList);
    setLoading(false);
  };

  return (
    <View style={{ backgroundColor: Colors.white }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontSize: 25, fontWeight: "bold", color: Colors.primary }}
        >
          John News App
        </Text>
        <Ionicons name="notifications-outline" size={25} color="black" />
      </View>

      <CategoryTextSlider
        selectCategory={(category) => getNewsByCategory(category)}
      />
      {loading ? (
        <ActivityIndicator size={"large"} color={Colors.primary} style={{marginTop:Dimensions.get('screen').height*0.40}} />
      ) : (
        <>
          <ScrollView style={{ marginBottom: 70 }}>
            <TopHeadLineSlider newsList={newsList} />
            <HeadlineList newsList={newsList} />
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default Home;
