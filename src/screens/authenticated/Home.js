/* eslint-disable react-native/no-inline-styles */
import { Button, Content, H3, Icon, Text, View } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { ChangeFont, Colors, WIDTH } from "../../constants";
import Grid from "../../components/Grid";
import SaloonCard from "../../components/SaloonCard";
import SaloonHeader from "../../components/SaloonHeader";
import CompleteLogo from "../../components/svg/CompleteLogo";
import { useSelector } from "react-redux";
import { GetRequest } from "../../utils/Requests";
import { GET_POPULAR_SALOONS_URL } from "../../constants/ApisEndPoints";
import CalculateDistance from "../../utils/CalculateDistance";
const ITEM_WIDTH = WIDTH * 0.9;
const Home = ({ navigation }) => {
  const scroll = useRef(null);
  const user_data = useSelector((state) => state);
  const token = user_data.current_user.token;
  const location = user_data.current_user.location;
  const [popularSaloons, setPopularSaloons] = useState([]);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    // console.log('current_location: ' + JSON.stringify(current_location));
    getPopularSaloons();
  }, []);

  const data = [
    {
      _id: "1",
      uri: require("../../../assets/img/womenS.jpg"),
      text: "Bridal Saloon",
    },
    {
      _id: "2",
      uri: require("../../../assets/img/service.png"),
      text: `Women's Saloon`,
    },
    {
      _id: "3",
      uri: require("../../../assets/img/grape.png"),
      text: "Skin Treatment",
    },
    {
      _id: "4",
      uri: require("../../../assets/img/attractive.png"),
      text: "relaxation",
    },
    {
      _id: "5",
      uri: require("../../../assets/img/very.png"),
      text: "hair color",
    },
    {
      _id: "6",
      uri: require("../../../assets/img/woman.png"),
      text: "spa",
    },
  ];
  const _renderItem = ({ item }) => {
    if (item.empty) {
      return <View style={{ flex: 1, backgroundColor: "transparnet" }} />;
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ marginRight: 10, marginTop: 10 }}>
          <Image
            source={item.uri}
            style={{
              resizeMode: "cover",
              height: 100,
              width: "100%",
            }}
          />
          <TouchableOpacity
            onPress={item.onPress}
            style={{
              // alignItems: 'center',
              // justifyContent: 'center',
              paddingVertical: 10,
              // height: 80,
            }}
          >
            <Text>{item.text}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  const sloonCardData = [
    {
      _id: 1,
      badgeText: "Unique",
      badgeText1: "New",
      badgeColor: "purple",
      badgeColor1: Colors.blue,
      dHeading: "Some Name of Saloon",
      subHeading:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam rem laboriosam tenetur nulla, sit error.",
      ratingText: "4.0 Great",
      count: 6,
      distance: "3.5Km",
      locationColor: "white",
      img: require("../../../assets/img/womenS.jpg"),

      textColor: "white",
    },
    {
      _id: 2,
      badgeText: "Unique",
      badgeText1: "New",
      badgeColor: "purple",
      badgeColor1: Colors.blue,
      dHeading: "Some Name of Saloon",
      subHeading:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam rem laboriosam tenetur nulla, sit error.",
      ratingText: "4.0 Great",
      count: 6,
      distance: "3.5Km",
      locationColor: "white",
      img: require("../../../assets/img/womenS.jpg"),

      textColor: "white",
    },
    {
      _id: 3,
      badgeText: "Unique",
      badgeText1: "New",
      badgeColor: "purple",
      badgeColor1: Colors.blue,
      dHeading: "Some Name of Saloon",
      subHeading:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam rem laboriosam tenetur nulla, sit error.",
      ratingText: "4.0 Great",
      count: 6,
      distance: "3.5Km",
      locationColor: "white",
      img: require("../../../assets/img/womenS.jpg"),

      textColor: "white",
    },
  ];

  const getPopularSaloons = async () => {
    const values = {
      page: "1",
    };

    await GetRequest(GET_POPULAR_SALOONS_URL, values, token)
      .then((response) => {
        if (response.status === 200) {
          // console.log(JSON.stringify(response.data.data));
          setPopularSaloons(response.data.data.res);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <Content style={{ backgroundColor: Colors.background, flexGrow: 1 }}>
      <View
        style={{
          marginHorizontal: 10,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginBottom: 5,
        }}
      >
        <CompleteLogo height={60} width={90} />
        <Icon style={{ fontSize: 35 }} name="menu" />
      </View>
      <View style={{ backgroundColor: Colors.primary, height: 250 }}>
        <View style={{ marginVertical: 15, flexGrow: 1 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Deals")}>
            <View
              // padder
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundColor: "white",
                width: WIDTH * 0.95,
                alignSelf: "center",
                height: 40,
              }}
            >
              <Text>Search for Deals,Saloons, Services ect</Text>
              <Icon name="search" style={{ fontSize: 20 }} />
            </View>
          </TouchableOpacity>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginHorizontal: (WIDTH * 0.1) / 4,
              marginVertical: 15,
            }}
            ref={scroll}
          >
            <View
              style={{
                width: WIDTH * 0.95,
                alignSelf: "center",
                // marginHorizontal: 8,
              }}
            >
              <Image
                source={require("../../../assets/img/s1.png")}
                style={{ width: "100%", height: 120, resizeMode: "cover" }}
              />
            </View>
            <View
              style={{
                width: WIDTH * 0.9,
                alignSelf: "center",
                marginHorizontal: 8,
              }}
            >
              <Image
                source={require("../../../assets/img/s1.png")}
                style={{ width: "100%", height: 120, resizeMode: "cover" }}
              />
            </View>
            <View
              style={{
                width: WIDTH * 0.9,
                alignSelf: "center",
                marginHorizontal: 8,
                marginRight: 40,
              }}
            >
              <Image
                source={require("../../../assets/img/s1.png")}
                style={{ width: "100%", height: 120, resizeMode: "cover" }}
              />
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Icon
              name="dot-single"
              type="Entypo"
              style={{ color: "white", fontSize: 30 }}
              onPress={() => {
                scroll.current.scrollTo({ x: 10, animated: true });
              }}
            />
            <Icon
              name="dot-single"
              type="Entypo"
              style={{ color: "white", fontSize: 30 }}
              onPress={() => {
                scroll.current.scrollTo({
                  x: 1 * ITEM_WIDTH + 15,
                  animated: true,
                });
              }}
            />
            <Icon
              name="dot-single"
              type="Entypo"
              style={{ color: "white", fontSize: 30 }}
              onPress={() => {
                scroll.current.scrollTo({
                  x: 2 * ITEM_WIDTH + 15,
                  animated: true,
                });
              }}
            />
          </View>
        </View>
      </View>
      <View padder>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            marginVertical: 10,
          }}
        >
          <H3>Most Popular Categories</H3>
          <Icon name="right" type="AntDesign" />
        </View>

        <Grid data={data} _renderItem={_renderItem} noOfColumns={3} />
      </View>

      <View padder style={{ backgroundColor: Colors.primary }}>
        <SaloonHeader heading={"Most Popular Saloons"} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {popularSaloons &&
            popularSaloons.map((item) => (
              <SaloonCard
                key={item.id.toString()}
                badgeText={item.badgeText}
                badgeText1={"new"} //item.item.badgeText1}
                badgeColor={item.badgeColor}
                badgeColor1={Colors.blue}
                dHeading={item.name}
                subHeading={item.description}
                ratingText={item.rating}
                count={item.total_reviews}
                distance={
                  CalculateDistance.convertKmsToMiles(
                    CalculateDistance.getDistanceFromLatLonInKm(
                      location.latitude,
                      location.longitude,
                      item.latitude,
                      item.longitude
                    )
                  ).toFixed(2) + " mi"
                }
                locationColor={"#ffffff"}
                img={item.logo_path}
                textColor={"#ffffff"}
                buttonText="View Details"
                buttonClick={() =>
                  navigation.navigate("Saloon", {
                    screen: "Details",
                    params: { item: item },
                  })
                }
              />
            ))}
        </ScrollView>
      </View>
      {/* <View padder style={{ marginTop: 20 }}>
        <SaloonHeader heading={"Recently Viewed"} color={"black"} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {sloonCardData.map((item) => (
            <SaloonCard
              key={item._id}
              badgeText={item.badgeText}
              badgeText1={item.badgeText1}
              badgeColor={item.badgeColor}
              badgeColor1={item.badgeColor1}
              dHeading={item.dHeading}
              subHeading={item.subHeading}
              ratingText={item.ratingText}
              count={item.count}
              distance={item.distance}
              locationColor={Colors.grey}
              img={item.img}
              textColor={"black"}
              buttonText="View Details"
              buttonClick={() => navigation.navigate("Saloon")}
            />
          ))}
        </ScrollView>
      </View>
      <View padder>
        <SaloonHeader heading={"Top Rated Saloons"} color={"black"} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {sloonCardData.map((item) => (
            <SaloonCard
              key={item._id}
              badgeText={item.badgeText}
              badgeText1={item.badgeText1}
              badgeColor={item.badgeColor}
              badgeColor1={item.badgeColor1}
              dHeading={item.dHeading}
              subHeading={item.subHeading}
              ratingText={item.ratingText}
              count={item.count}
              distance={item.distance}
              locationColor={Colors.grey}
              img={item.img}
              textColor={"black"}
              buttonText="View Details"
              buttonClick={() => navigation.navigate("Saloon")}
            />
          ))}
        </ScrollView>
      </View> */}
    </Content>
  );
};

export default Home;
